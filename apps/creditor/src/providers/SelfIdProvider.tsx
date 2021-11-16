import { useWallet } from '@meta-cred/usewallet';
import { useLocalStorage, usePrevious } from '@meta-cred/utils';
import { EthereumAuthProvider, SelfID } from '@self.id/web';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { CONFIG } from '@/config';
import { useCeramicDID } from '@/hooks/useCeramicDID';

export type ISelfIdContext = {
  myDID: string | null | undefined;
  mySelfId: SelfID | null;
  isConnecting: boolean;
  connect: () => Promise<void>;
  disconnect: () => void;
};

export const SelfIdContext = createContext<ISelfIdContext>({
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

  const [connectedAddress, setConnectedAddress] = useLocalStorage<
    string | null
  >(STORAGE_KEY, null);

  const { data: myDID } = useCeramicDID(address);

  const connect = useCallback(async () => {
    if (!provider || !address) {
      throw new Error('No Ethereum Wallet Connected');
    }
    try {
      setIsConnecting(true);
      const self = await SelfID.authenticate({
        authProvider: new EthereumAuthProvider(provider.provider, address),
        ceramic: CONFIG.ceramicGateway,
        connectNetwork: CONFIG.ceramicEndpoint,
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
    setConnectedAddress(null);
  }, [setConnectedAddress]);

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

  return (
    <SelfIdContext.Provider
      value={{
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
