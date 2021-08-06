import { BigNumber, utils } from 'ethers';

export const formatEtherDecimals = (n: BigNumber, decimals = 4): string =>
  (+utils.formatEther(n)).toFixed(decimals);
