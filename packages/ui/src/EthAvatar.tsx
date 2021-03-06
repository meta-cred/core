import { Avatar, AvatarProps } from '@chakra-ui/react';
import React from 'react';

export type EthAvatarProps = Omit<AvatarProps, 'src'> & {
  address?: string | null;
  imageUrl?: string | null;
};

export const EthAvatar: React.FC<EthAvatarProps> = ({
  imageUrl,
  address,
  ...props
}) => (
  <Avatar
    src={
      imageUrl || (address ? `https://effigy.im/a/${address}.svg` : undefined)
    }
    {...props}
  />
);
