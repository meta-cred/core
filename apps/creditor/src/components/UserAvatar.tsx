import { EthAvatar, EthAvatarProps } from '@meta-cred/ui/EthAvatar';
import { Maybe } from '@meta-cred/utils';
import React from 'react';

import { user as UserType } from '@/gqty';
import { getUserAvatarProps } from '@/utils/userHelpers';

type Props = EthAvatarProps & {
  user: Maybe<UserType>;
};

export const UserAvatar: React.FC<Props> = ({ user, ...props }) => (
  <EthAvatar {...getUserAvatarProps(user)} {...props} />
);
