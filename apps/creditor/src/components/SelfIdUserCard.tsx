import { Spinner, Text } from '@chakra-ui/react';
import { ProfileCard } from '@meta-cred/ui/ProfileCard';
import { getSelfIdImageUrl } from '@meta-cred/utils';
import React from 'react';

import { useSelfIdProfile } from '../hooks/useSelfIdProfile';

export type SelfIdUserCardProps = {
  addressOrDid: string | null;
};

export const SelfIdUserCard: React.FC<SelfIdUserCardProps> = ({
  addressOrDid,
}) => {
  const { isLoading, error, data } = useSelfIdProfile(addressOrDid);

  if (isLoading) return <Spinner />;
  if (error) return <Text>An error has occurred: {error}</Text>;

  if (!data) return null;

  return (
    <ProfileCard
      name={data.name || 'No Name'}
      description={data.description}
      image={getSelfIdImageUrl(data.image)}
      background={getSelfIdImageUrl(data.background)}
      emoji={data.emoji}
    />
  );
};
