import { SimpleGrid, useColorModeValue as mode } from '@chakra-ui/react';
import { ProfileInfo } from '@meta-cred/ui/ProfileInfo';
import React from 'react';

import { dao as Dao } from '@/gqty';
import { getUserAvatarProps, getUserName } from '@/utils/userHelpers';

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
      px={{ base: 0, md: 4 }}
      w="100%"
    >
      {members.map((member) => {
        const { profile, accounts } = member.user;
        const ethAddress = member.user.eth_address;

        return (
          <ProfileInfo
            borderWidth={1}
            rounded="lg"
            nameFontSize="lg"
            bioFontSize="sm"
            py={6}
            px={4}
            spacing={3}
            bg={cardBg}
            key={ethAddress || 0}
            address={ethAddress}
            avatarProps={{
              ...getUserAvatarProps(member.user),
              size: 'lg',
            }}
            accounts={accounts?.map((a) => ({
              id: a?.id,
              host: a?.host,
              protocol: a?.protocol,
            }))}
            name={getUserName(member.user)}
            bio={profile?.description || ''}
            emoji={profile?.emoji || ''}
            isLoaded={Boolean(ethAddress)}
          />
        );
      })}
    </SimpleGrid>
  );
};
