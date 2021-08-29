import { CHAIN_NAMES, ChainId } from '@meta-cred/utils';
import { Ens } from 'bnc-onboard/dist/src/interfaces';
import { providers } from 'ethers';
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { authenticateWallet, clearToken, getExistingAuth } from './authToken';
import { useOnboard } from './useOnboard';

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
  children: React.ReactNode;
  onboardDappId?: string;
  infuraKey: string;
  networkId: number;
  appName?: string;
  darkMode?: boolean;
}

export const WalletProvider: React.FC<WalletProviderOptions> = ({
  children,
  networkId = ChainId.Mainnet,
  onboardDappId,
  infuraKey,
  appName,
  darkMode,
}) => {
  const [ens, setEns] = useState<Ens>({});
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [authToken, setAuthToken] = useState<string | null>(null);

  const networkName = CHAIN_NAMES[networkId as keyof typeof CHAIN_NAMES];

  const rpcUrl = `https://${networkName.toLowerCase()}.infura.io/v3/${infuraKey}`;

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

  const { selectWallet, address, disconnectWallet, provider, onboard } =
    useOnboard({
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
        subscriptions: {
          ens: (ensData) => {
            setEns(ensData);
          },
        },
      },
    });

  useEffect(() => {
    onboard?.config({ darkMode });
  }, [darkMode, onboard]);

  const disconnect = useCallback(() => {
    clearToken();
    disconnectWallet();
    setAuthToken(null);
    setIsConnecting(false);
  }, [disconnectWallet]);

  const connectWallet = useCallback(async () => {
    setIsConnecting(true);
    try {
      // disconnect();
      await selectWallet();
      setIsConnecting(false);
    } catch (error) {
      console.log(error); // eslint-disable-line no-console
      setIsConnecting(false);
      disconnect();
    }
  }, [selectWallet, disconnect]);

  const authenticateUser = useCallback(async () => {
    if (!provider)
      throw new Error('No Ethereum Provider, cannot authenticate.');

    try {
      let token: string | null = await getExistingAuth(provider);
      if (!token) {
        token = await authenticateWallet(provider);
      }
      setAuthToken(token);
    } catch (e) {
      alert(
        `Unable to Authenticate: ${(e as Error)?.message || (e as string)}`,
      );
    }
  }, [provider]);

  return (
    <WalletContext.Provider
      value={{
        provider,
        connectWallet,
        authenticateUser,
        disconnect,
        isConnected: !!address,
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
