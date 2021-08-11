import { Spinner, Text } from '@chakra-ui/react';
import { ProfileCard } from '@meta-cred/ui/ProfileCard';

import { CONFIG } from '../config';
import { useIdxProfile } from '../hooks/useIdxProfile';

const getImageUrl = (hash: string) =>
  `${CONFIG.ipfsEndpoint}/ipfs/${hash.slice(7) || ''}`;

export const IdxUserCard: React.FC = () => {
  const { isLoading, error, data } = useIdxProfile();

  if (isLoading) return <Spinner />;
  if (error) return <Text>An error has occurred: {error}</Text>;

  if (!data) return null;

  return (
    <ProfileCard
      name={data.name || 'No Name'}
      description={data.description}
      image={getImageUrl(data.image?.original.src || '')}
      background={getImageUrl(data.background?.original.src || '')}
      emoji={data.emoji}
    />
  );
};
