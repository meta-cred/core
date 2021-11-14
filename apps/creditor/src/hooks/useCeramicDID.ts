import { formatCeramicId } from '@meta-cred/utils';
import { useQuery } from 'react-query';

import { getSelfIdCore } from '@/utils/selfid';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useCeramicDID = (addressOrDID: string | null) => {
  const core = getSelfIdCore();

  const account = formatCeramicId(addressOrDID);

  return useQuery(['useCeramicDid', account], async () => {
    if (!account) return null;
    return core.getAccountDID(account);
  });
};
