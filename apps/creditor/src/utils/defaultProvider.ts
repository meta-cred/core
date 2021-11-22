import { ethers } from 'ethers';

import { CONFIG } from '@/config';

export const defaultMainnetProvider = ethers.getDefaultProvider('mainnet', {
  alchemy: CONFIG.alchemyId,
  infura: CONFIG.infuraId,
  pocket: CONFIG.pocketId,
  quorum: 1,
});
