import Onboard from 'bnc-onboard';
import { API, Initialization, Wallet } from 'bnc-onboard/dist/src/interfaces';
import { ethers, providers } from 'ethers';
import { useCallback, useEffect, useState } from 'react';

const SELECTED_WALLET_STORAGE_KEY = '__onboardSelectedWallet__';
/**
 * A React Web3 wallet hook for [Onboard.js](https://blocknative.com/onboard) library.
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useOnboard = (
  {
    options,
    initialData,
  }: {
    options?: Initialization & { networkId?: number };
    initialData?: Partial<{ address: string; balance: string }>;
  } = {
    options: { networkId: 1 },
    initialData: {},
  },
) => {
  const [didInit, setDidInit] = useState(false);
  const [onboard, setOnboard] = useState<API>();
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [address, setAddress] = useState<string | null>(
    initialData?.address || '',
  );
  const [balance, setBalance] = useState<string | null>(
    initialData?.balance || '0',
  );
  const [provider, setProvider] = useState<providers.Web3Provider | null>(null);

  useEffect(() => {
    setOnboard(
      Onboard({
        ...options,
        networkId: options?.networkId || 1,
        subscriptions: {
          ...options?.subscriptions,
          wallet: (selectedWallet) => {
            console.log({ selectedWallet });

            options?.subscriptions?.wallet?.(selectedWallet);

            if (selectedWallet.provider && selectedWallet.name) {
              setWallet(selectedWallet);

              const ethersProvider = new ethers.providers.Web3Provider(
                selectedWallet.provider,
              );

              window.localStorage.setItem(
                SELECTED_WALLET_STORAGE_KEY,
                selectedWallet.name,
              );

              setProvider(ethersProvider);
            }
          },
          address: (newAddress) => {
            options?.subscriptions?.address?.(newAddress);
            if (newAddress) setAddress(newAddress);
          },
          balance: (newBalance) => {
            options?.subscriptions?.balance?.(newBalance);
            if (address) setBalance(newBalance);
          },
        },
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const disconnectWallet = useCallback(() => {
    if (onboard) {
      setBalance(null);
      setAddress(null);
      setProvider(null);
      setWallet(null);
      onboard.walletReset();

      window.localStorage.removeItem(SELECTED_WALLET_STORAGE_KEY);
    }
  }, [onboard]);

  useEffect(() => {
    (async () => {
      if (!onboard || didInit) return;
      setDidInit(true);

      const previouslySelectedWallet = window.localStorage.getItem(
        SELECTED_WALLET_STORAGE_KEY,
      );
      if (!previouslySelectedWallet) return;

      const didSelect = await onboard.walletSelect(previouslySelectedWallet);
      if (!didSelect) return;

      // WalletConnect doesn't auto reconnect unless onboard.walletCheck() is called
      if (previouslySelectedWallet === 'WalletConnect') {
        const isReady = await onboard.walletCheck();
        if (!isReady) disconnectWallet();
      }
    })();
  }, [onboard, disconnectWallet, didInit]);

  const selectWallet = useCallback(async () => {
    if (!onboard) return;

    const didSelect = await onboard.walletSelect();
    if (!didSelect) return;

    const isReady = await onboard.walletCheck();
    if (!isReady) {
      disconnectWallet();
    }
  }, [onboard, disconnectWallet]);

  return {
    onboard,
    wallet,
    address,
    selectWallet,
    balance,
    provider,
    disconnectWallet,
  };
};
