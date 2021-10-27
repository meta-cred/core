import { addressToCaip10String } from '@meta-cred/utils';
import { utils } from 'ethers';
import { useQuery } from 'react-query';

import { getSelfIdCore } from '../utils/selfid';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useCeramicDID = (addressOrDID: string | null) => {
  const core = getSelfIdCore();

  const account =
    addressOrDID && utils.isAddress(addressOrDID)
      ? addressToCaip10String(addressOrDID)
      : addressOrDID;

  return useQuery(['useCeramicDid', account], async () => {
    if (!account) return null;
    return core.getAccountDID(account);
  });
};
