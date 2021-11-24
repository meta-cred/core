import { getDefaultProvider } from '@ethersproject/providers';

import { CONFIG } from '@/config';

export const defaultMainnetProvider = getDefaultProvider('mainnet', {
  alchemy: CONFIG.alchemyId,
  infura: CONFIG.infuraId,
  pocket: CONFIG.pocketId,
  quorum: 1,
});
