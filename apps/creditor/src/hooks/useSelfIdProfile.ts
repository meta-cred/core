import { formatCeramicId } from '@meta-cred/utils';
import { useQuery } from 'react-query';

import { getSelfIdCore } from '@/utils/selfid';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useSelfIdProfile = (addressOrDID: string | null) => {
  const core = getSelfIdCore();

  const id = formatCeramicId(addressOrDID);

  return useQuery(
    ['selfIdProfile', id],
    async () => {
      if (!id) return null;
      return core.get<'basicProfile'>('basicProfile', id);
    },
    { enabled: Boolean(id) },
  );
};
