import { SimpleGrid, useColorModeValue as mode } from '@chakra-ui/react';
import type { ImageSources } from '@datamodels/identity-profile-basic';
import { ProfileInfo } from '@meta-cred/ui/ProfileInfo';
import { getSelfIdImageUrl } from '@meta-cred/utils';
import React from 'react';

import { dao as Dao, Maybe } from '@/gqty';

export type DaoContributionListProps = {
  dao: Dao;
};

export const DaoMemberList: React.FC<DaoContributionListProps> = ({ dao }) => {
  const members = dao.members();
  const cardBg = mode('white', 'gray.700');

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      spacing="6"
      mt={8}
      px={[0, 4]}
      w="100%"
    >
      {members.map((member) => {
        const { profile, accounts } = member.user;
        const ethAddress = member.user.eth_address;

        return (
          <ProfileInfo
            borderWidth={1}
            rounded="lg"
            avatarSize="lg"
            nameFontSize="lg"
            bioFontSize="sm"
            py={6}
            px={4}
            spacing={3}
            bg={cardBg}
            key={ethAddress}
            address={ethAddress}
            accounts={accounts?.map((a) => ({
              id: a?.id,
              host: a?.host,
              protocol: a?.protocol,
            }))}
            name={profile?.name || ethAddress || 'No Name'}
            bio={profile?.description || ''}
            image={getSelfIdImageUrl(profile?.image as Maybe<ImageSources>)}
            background={getSelfIdImageUrl(
              profile?.background as Maybe<ImageSources>,
            )}
            emoji={profile?.emoji || ''}
            isLoaded={Boolean(ethAddress)}
          />
        );
      })}
    </SimpleGrid>
  );
};
