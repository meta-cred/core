import { Stack, Text, useColorModeValue as mode } from '@chakra-ui/react';
import { formatDistanceFromNow } from '@meta-cred/utils';
import React from 'react';

import { user as UserType } from '@/gqty';
import { getUserName } from '@/utils/userHelpers';

type Props = {
  user: UserType | null | undefined;
  date: Date | number | string | null | undefined;
};
export const ContributionCardAuthorText: React.FC<Props> = ({ user, date }) => (
  <Stack spacing={1} direction="row" lineHeight="1">
    <Text
      fontSize={['xs', 'sm']}
      fontWeight="medium"
      color={mode('gray.600', 'gray.300')}
    >
      {getUserName(user)}
    </Text>
    <Text
      fontSize={['xs', 'sm']}
      color={mode('blackAlpha.500', 'whiteAlpha.500')}
    >
      tracked {formatDistanceFromNow(date)}
    </Text>
  </Stack>
);
