import { Button } from '@chakra-ui/react';
import type { ImageSources } from '@datamodels/identity-profile-basic';
import { Link } from '@meta-cred/ui/Link';
import { ProfileInfo } from '@meta-cred/ui/ProfileInfo';
import { getSelfIdImageUrl, getSelfIdProfileLink } from '@meta-cred/utils';
import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

import { Maybe, useQuery } from '@/gqty';
import { useUser } from '@/hooks/useUser';
import { Container } from '@/layout/Container';
import { PageLayout } from '@/layout/PageLayout';

const ProfilePage: React.FC = () => {
  const { user, address, isLoading } = useUser({ redirectTo: '/' });

  const query = useQuery();
  const userQuery = query.user_by_pk({ did: user?.did || '' });
  const profile = userQuery?.profile;
  const accounts = userQuery?.accounts;

  const isLoaded = !query.$state.isLoading && !isLoading;

  return (
    <PageLayout>
      <Container maxW="container.sm">
        <ProfileInfo
          mt={4}
          address={address}
          name={profile?.name || address || 'No Name'}
          description={profile?.description || ''}
          image={getSelfIdImageUrl(profile?.image as Maybe<ImageSources>)}
          background={getSelfIdImageUrl(
            profile?.background as Maybe<ImageSources>,
          )}
          emoji={profile?.emoji || ''}
          rounded="none"
          isLoaded={isLoaded}
          accounts={accounts?.map((a) => ({
            id: a?.id,
            host: a?.host,
            protocol: a?.protocol,
          }))}
        />

        {isLoaded && user?.did ? (
          <Button
            size="sm"
            as={Link}
            isExternal
            href={getSelfIdProfileLink(user.did)}
            rightIcon={<FiExternalLink />}
            variant="outline"
          >
            Edit Profile on Self.ID
          </Button>
        ) : null}
      </Container>
    </PageLayout>
  );
};

export default ProfilePage;
