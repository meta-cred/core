import { useWallet } from '@meta-cred/usewallet';
import { useLocalStorage, usePrevious } from '@meta-cred/utils';
import { Core } from '@self.id/core';
import { EthereumAuthProvider, SelfID } from '@self.id/web';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { CONFIG } from '../config';
import { useCeramicDID } from '../hooks/useCeramicDID';
import { getSelfIdCore } from '../utils/selfid';

export type ISelfIdContext = {
  core: Core;
  myDID: string | null | undefined;
  mySelfId: SelfID | null;
  isConnecting: boolean;
  connect: () => Promise<void>;
  disconnect: () => void;
};

export const SelfIdContext = createContext<ISelfIdContext>({
  core: new Core({ ceramic: CONFIG.ceramicEndpoint }),
  myDID: null,
  mySelfId: null,
  isConnecting: false,
  connect: () => Promise.resolve(),
  disconnect: () => {},
});

type SelfIdProviderProps = {
  children: React.ReactNode;
};

const STORAGE_KEY = '__selfID_connectedAddress__';

export const SelfIdProvider: React.FC<SelfIdProviderProps> = ({ children }) => {
  const [mySelfId, setMySelfId] = useState<SelfID | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const { provider, address } = useWallet();

  const [connectedAddress, setConnectedAddress, removeConnectedAddress] =
    useLocalStorage<string | null>(STORAGE_KEY, null);

  const core = getSelfIdCore();

  const { data: myDID } = useCeramicDID(address);

  const connect = useCallback(async () => {
    if (!provider || !address) {
      throw new Error('No Ethereum Wallet Connected');
    }
    try {
      setIsConnecting(true);
      const self = await SelfID.authenticate({
        authProvider: new EthereumAuthProvider(provider.provider, address),
        ceramic: CONFIG.ceramicEndpoint,
        connectNetwork: 'testnet-clay',
      });
      setMySelfId(self);
      setConnectedAddress(address);
      setIsConnecting(false);
    } catch (e) {
      setIsConnecting(false);
      throw new Error(`Unable to connect to Ceramic: ${e as string}`);
    }
  }, [provider, address, setConnectedAddress]);

  const disconnect = useCallback(() => {
    setMySelfId(null);
    removeConnectedAddress();
  }, [removeConnectedAddress]);

  const prevAddress = usePrevious(address);

  // Reset SelfID every time address changes
  useEffect(() => {
    if (prevAddress && address !== prevAddress) {
      disconnect();
    }
  }, [disconnect, address, prevAddress]);

  // Automatically connect to SelfID if previously connected
  useEffect(() => {
    (async () => {
      const wasPreviouslyConnected = address && address === connectedAddress;
      if (!mySelfId && wasPreviouslyConnected) {
        try {
          await connect();
        } catch (e) {
          console.warn('Unable to reconnect to SelfID', e);
        }
      }
    })();
  }, [connect, address, connectedAddress, mySelfId]);

  useEffect(() => {
    if (!provider || !address) disconnect();
  }, [disconnect, provider, address]);

  return (
    <SelfIdContext.Provider
      value={{
        core,
        myDID,
        mySelfId,
        isConnecting,
        connect,
        disconnect,
      }}
    >
      {children}
    </SelfIdContext.Provider>
  );
};

export const useSelfId = (): ISelfIdContext => useContext(SelfIdContext);
