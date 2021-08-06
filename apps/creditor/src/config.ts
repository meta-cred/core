import { ChainId, Config as DappConfig } from '@usedapp/core';

export const DAPP_CONFIG: DappConfig = {
  readOnlyChainId: ChainId.Mainnet,
  readOnlyUrls: {
    [ChainId.Mainnet]:
      'https://mainnet.infura.io/v3/781d8466252d47508e177b8637b1c2fd',
  },
};
