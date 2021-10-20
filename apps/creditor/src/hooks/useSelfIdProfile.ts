import { addressToCaip10String } from '@meta-cred/utils';
import { utils } from 'ethers';
import { useQuery } from 'react-query';
import { useSelfId } from 'src/providers/SelfIdProvider';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useSelfIdProfile = (addressOrDID: string | null) => {
  const { core } = useSelfId();

  const id =
    addressOrDID && utils.isAddress(addressOrDID)
      ? addressToCaip10String(addressOrDID)
      : addressOrDID;

  return useQuery(
    ['selfIdProfile', id],
    async () => {
      if (!id) return null;
      return core.get<'basicProfile'>('basicProfile', id);
    },
    { enabled: Boolean(id) },
  );
};
