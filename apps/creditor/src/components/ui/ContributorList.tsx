import { Badge, HStack, Stack, Text } from '@chakra-ui/react';
import React from 'react';

import { UserAvatar } from '@/components/UserAvatar';
import { user_contribution } from '@/gqty';
import { getUserName } from '@/utils/userHelpers';

export type Props = {
  contributors: user_contribution[];
  showAvatar?: boolean;
};

export const ContributorList: React.FC<Props> = ({
  contributors,
  showAvatar,
}) => (
  <Stack spacing={showAvatar ? 1 : 2}>
    <Text size="sm" fontWeight="semibold" mb={1}>
      Contributors
    </Text>
    {contributors.map((c) => (
      <HStack key={c.user.did}>
        {showAvatar ? <UserAvatar user={c.user} size="xs" /> : null}
        <Text fontSize="xs" flex={1}>
          {getUserName(c.user)}
        </Text>
        <Badge colorScheme="gray">
          {((c.contribution_share || 0) * 100).toFixed(0)}%
        </Badge>
      </HStack>
    ))}
  </Stack>
);
