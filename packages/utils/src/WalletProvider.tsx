import { Ens } from 'bnc-onboard/dist/src/interfaces';
import { providers } from 'ethers';
import React, { createContext, useCallback, useState } from 'react';
import { useOnboard } from 'use-onboard';

import { authenticateWallet, clearToken, getExistingAuth } from './authToken';

export type IWalletContext = {
  provider: providers.Web3Provider | null;
  connectWallet: () => Promise<void>;
  authenticateUser: () => Promise<void>;
  disconnect: () => void;
  isConnecting: boolean;
  isConnected: boolean;
  address: string | null;
  authToken: string | null;
  ens: Ens | null;
};

export const WalletContext = createContext<IWalletContext>({
  provider: null,
  connectWallet: async () => {},
  authenticateUser: async () => {},
  disconnect: () => undefined,
  isConnecting: false,
  isConnected: false,
  address: null,
  authToken: null,
  ens: null,
});

interface WalletProviderOptions {
  children: React.ReactElement;
  onboardDappId?: string;
  networkId: number;
}

export const WalletProvider: React.FC<WalletProviderOptions> = ({
  children,
  networkId = 1,
  onboardDappId,
}) => {
  const [ens, setEns] = useState<Ens>({});
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [authToken, setAuthToken] = useState<string | null>(null);

  const {
    selectWallet,
    address,
    isWalletSelected,
    disconnectWallet,
    provider,
  } = useOnboard({
    options: {
      dappId: onboardDappId, // optional API key
      hideBranding: true,
      darkMode: true,
      networkId, // Ethereum network ID
      subscriptions: {
        ens: (ensData) => {
          setEns(ensData);
        },
      },
    },
  });

  const disconnect = useCallback(() => {
    clearToken();
    disconnectWallet();
    setAuthToken(null);
    setIsConnecting(false);
  }, [disconnectWallet]);

  const connectWallet = useCallback(async () => {
    setIsConnecting(true);
    try {
      await selectWallet();
      setIsConnecting(false);
    } catch (error) {
      console.log(error); // eslint-disable-line no-console
      setIsConnecting(false);
      disconnect();
    }
  }, [selectWallet, disconnect]);

  const authenticateUser = useCallback(async () => {
    let token: string | null = await getExistingAuth(provider);
    if (!token) {
      token = await authenticateWallet(provider);
    }
    setAuthToken(token);
  }, [provider]);

  return (
    <WalletContext.Provider
      value={{
        provider,
        connectWallet,
        authenticateUser,
        disconnect,
        isConnected: isWalletSelected,
        isConnecting,
        address,
        authToken,
        ens,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
