import { Spacer } from '@chakra-ui/react';
import type { ImageSources } from '@datamodels/identity-profile-basic';
import { ProfileCard } from '@meta-cred/ui/ProfileCard';
import { getSelfIdImageUrl } from '@meta-cred/utils';
import React from 'react';

import { Maybe, useQuery } from '@/gqty';
import { useUser } from '@/hooks/useUser';
import { PageLayout } from '@/layout/PageLayout';

const ProfilePage: React.FC = () => {
  const { user } = useUser({ redirectTo: '/' });

  const query = useQuery();
  const profile = query.user_by_pk({ did: user?.did || '' })?.profile;

  return (
    <PageLayout>
      <Spacer mt={16} />
      <ProfileCard
        name={profile?.name || 'No Name'}
        description={profile?.description || ''}
        image={getSelfIdImageUrl(profile?.image as Maybe<ImageSources>)}
        background={getSelfIdImageUrl(
          profile?.background as Maybe<ImageSources>,
        )}
        emoji={profile?.emoji || ''}
        rounded="none"
        isLoaded={Boolean(!query.$state.isLoading && profile?.name)}
      />
    </PageLayout>
  );
};

export default ProfilePage;
