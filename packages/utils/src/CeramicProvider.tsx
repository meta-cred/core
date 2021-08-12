import { EthereumAuthProvider, ThreeIdConnect } from '@3id/connect';
import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver';
import Ceramic from '@ceramicnetwork/http-client';
import { IDX } from '@ceramicstudio/idx';
import { DID } from 'dids';
import { DagJWS } from 'dids/lib/types';
import { providers } from 'ethers';
import React, { createContext, useCallback, useEffect, useState } from 'react';

export type ICeramicContext = {
  isConnecting: boolean;
  isConnected: boolean;
  isAvailable: boolean;
  connect3ID: () => Promise<void>;
  disconnect: () => void;
  ceramic: Ceramic | undefined;
  did: DID | undefined;
  idx: IDX | undefined;
  jws: DagJWS | undefined;
};

export const CeramicContext = createContext<ICeramicContext>({
  isConnecting: false,
  isAvailable: false,
  isConnected: false,
  connect3ID: async () => {},
  disconnect: () => {},
  ceramic: undefined,
  did: undefined,
  idx: undefined,
  jws: undefined,
});

type CeramicProviderProps = {
  children: React.ReactNode;
  ceramicUrl: string;
  provider: providers.ExternalProvider | null;
  address: string | null;
};

export const CeramicProvider: React.FC<CeramicProviderProps> = ({
  children,
  ceramicUrl,
  provider,
  address,
}) => {
  const [threeIdConnect, setThreeIdConnect] = useState<ThreeIdConnect>();
  const [ceramic, setCeramic] = useState<Ceramic>();
  const [did, setDid] = useState<DID>();
  const [jws, setJws] = useState<DagJWS>();
  const [idx, setIdx] = useState<IDX>();
  const [isConnecting, setIsConnecting] = useState(false);

  const connect3ID = useCallback(async () => {
    if (!provider || !address) {
      throw new Error('No web3 provider or address available');
    }

    try {
      const newThreeIdConnect = new ThreeIdConnect();
      setThreeIdConnect(newThreeIdConnect);

      setIsConnecting(true);

      const authProvider = new EthereumAuthProvider(provider, address);
      await newThreeIdConnect.connect(authProvider);

      const ceramicClient = new Ceramic(ceramicUrl);
      const newDid = new DID({
        provider: newThreeIdConnect.getDidProvider(),
        resolver: ThreeIdResolver.getResolver(ceramicClient),
      });
      await newDid.authenticate();

      const dagJws = await newDid.createJWS({ hello: 'world' });
      await ceramicClient.setDID(newDid);
      const idxClient = new IDX({ ceramic: ceramicClient });

      setJws(dagJws);
      setCeramic(ceramicClient);
      setDid(newDid);
      setIdx(idxClient);
      setIsConnecting(false);
    } catch (e) {
      setIsConnecting(false);
      throw new Error(`Unable to connect to Ceramic with 3ID: ${e as string}`);
    }
  }, [address, ceramicUrl, provider]);

  const disconnect = useCallback(() => {
    setJws(undefined);
    setCeramic(undefined);
    setDid(undefined);
    setIdx(undefined);
    setThreeIdConnect(undefined);
  }, []);

  useEffect(() => {
    if (!provider) disconnect();
  }, [disconnect, provider]);

  return (
    <CeramicContext.Provider
      value={{
        isConnected: threeIdConnect?.connected || false,
        isAvailable: !!address,
        isConnecting,
        connect3ID,
        disconnect,
        ceramic,
        did,
        idx,
        jws,
      }}
    >
      {children}
    </CeramicContext.Provider>
  );
};
