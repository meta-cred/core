import { isAddress, resolveIfEnsName } from '@meta-cred/utils';
import { useQuery } from 'react-query';

import { defaultMainnetProvider } from '@/utils/defaultProvider';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useResolveEnsName = (ensName: string) =>
  useQuery(
    ['ensAddress', ensName],
    () => resolveIfEnsName(ensName, defaultMainnetProvider),
    {
      initialData: isAddress(ensName) ? ensName : undefined,
    },
  );
