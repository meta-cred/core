import { Spinner, Text } from '@chakra-ui/react';
import { ProfileCard } from '@meta-cred/ui/ProfileCard';
import { getIdxImageUrl } from '@meta-cred/utils';

import { useIdxProfile } from '../hooks/useIdxProfile';

export const IdxUserCard: React.FC = () => {
  const { isLoading, error, data } = useIdxProfile();

  if (isLoading) return <Spinner />;
  if (error) return <Text>An error has occurred: {error}</Text>;

  if (!data) return null;

  return (
    <ProfileCard
      name={data.name || 'No Name'}
      description={data.description}
      image={getIdxImageUrl(data.image)}
      background={getIdxImageUrl(data.background)}
      emoji={data.emoji}
    />
  );
};
