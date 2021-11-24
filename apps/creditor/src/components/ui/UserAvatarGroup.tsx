import {
  AvatarGroup,
  AvatarGroupProps,
  useBreakpointValue,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import React from 'react';

import { UserAvatar } from '@/components/UserAvatar';
import { user as UserType } from '@/gqty';

type Props = Omit<AvatarGroupProps, 'children'> & {
  users: Array<UserType> | undefined;
};

export const UserAvatarGroup: React.FC<Props> = ({ users, ...props }) => (
  <AvatarGroup
    size={useBreakpointValue(['xs', 'sm'])}
    borderColor={mode('white', 'gray.700')}
    max={4}
    fontSize="xs"
    {...props}
  >
    {users?.map((u) => (
      <UserAvatar user={u} key={u?.did || 0} />
    ))}
  </AvatarGroup>
);
