import { BasicProfile } from '@ceramicstudio/idx-constants';
import { useCeramic } from '@meta-cred/utils/useCeramic';
import { useQuery } from 'react-query';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useIdxProfile = (did?: string) => {
  const { idx } = useCeramic();

  return useQuery(
    ['idxProfile', did],
    async () => {
      if (!idx) return null;

      return idx.get<BasicProfile>('basicProfile', did);
    },
    { enabled: Boolean(idx) },
  );
};
