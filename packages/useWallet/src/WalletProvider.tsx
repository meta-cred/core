import { CHAIN_NAMES, ChainId } from '@meta-cred/utils';
import {
  API,
  Ens,
  Initialization,
  Wallet,
} from 'bnc-onboard/dist/src/interfaces';
import { providers } from 'ethers';
import React, { createContext, useMemo } from 'react';

import { useOnboard } from './useOnboard';

export type IWalletContext = {
  provider: providers.Web3Provider | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  isConnecting: boolean;
  isConnected: boolean;
  address: string | null;
  ens: Ens | null;
  wallet: Wallet | null;
  onboard: API | null;
  connectedNetworkId: number | null;
};

export const WalletContext = createContext<IWalletContext>({
  provider: null,
  connectWallet: async () => {},
  disconnectWallet: () => undefined,
  isConnecting: false,
  isConnected: false,
  address: null,
  ens: null,
  wallet: null,
  onboard: null,
  connectedNetworkId: null,
});

interface WalletProviderOptions {
  children: React.ReactNode;
  onboardDappId?: string;
  infuraKey: string;
  networkId: number;
  appName?: string;
  darkMode?: boolean;
  rpcUrl?: string;
  customOptions?: Initialization;
}

export const WalletProvider: React.FC<WalletProviderOptions> = ({
  children,
  networkId = ChainId.Mainnet,
  onboardDappId,
  infuraKey,
  appName,
  darkMode,
  rpcUrl: propsRpcUrl,
  customOptions,
}) => {
  const networkName = CHAIN_NAMES[networkId as keyof typeof CHAIN_NAMES];

  const rpcUrl =
    propsRpcUrl ||
    `https://${networkName.toLowerCase()}.infura.io/v3/${infuraKey}`;

  const wallets = useMemo(
    () => [
      { walletName: 'metamask', preferred: true },
      {
        walletName: 'walletConnect',
        preferred: true,
        infuraKey,
      },
      {
        walletName: 'walletLink',
        preferred: true,
        rpcUrl,
      },
      {
        walletName: 'ledger',
        preferred: true,
        rpcUrl,
      },
      {
        walletName: 'lattice',
        rpcUrl,
        appName,
      },
      { walletName: 'torus', appName, infuraKey },
      { walletName: 'status' },
    ],
    [infuraKey, rpcUrl, appName],
  );

  const {
    onboard,
    selectWallet,
    address,
    disconnectWallet,
    provider,
    isConnecting,
    ens,
    wallet,
    connectedNetworkId,
  } = useOnboard({
    options: {
      dappId: onboardDappId, // optional API key
      hideBranding: true,
      darkMode,
      networkId, // Ethereum network ID
      networkName: CHAIN_NAMES[networkId as keyof typeof CHAIN_NAMES],
      walletSelect: {
        wallets,
        description: '',
      },
      ...customOptions,
    },
  });

  return (
    <WalletContext.Provider
      value={{
        onboard,
        provider,
        connectWallet: selectWallet,
        disconnectWallet,
        isConnected: !!address,
        isConnecting,
        address,
        ens,
        wallet,
        connectedNetworkId,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
