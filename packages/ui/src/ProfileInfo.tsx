import {
  Box,
  BoxProps,
  Heading,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  StackProps,
  Text,
} from '@chakra-ui/react';
import React from 'react';

import { AccountButtons, AccountButtonsProps } from './AccountButtons';
import { EthAvatar, Props as AvatarProps } from './EthAvatar';

type Props = BoxProps & {
  address?: string | null;
  image?: string;
  background?: string;
  name: string;
  bio?: string;
  emoji?: string;
  isLoaded: boolean;
  accounts?: AccountButtonsProps['accounts'];
  avatarSize?: AvatarProps['size'];
  nameFontSize?: BoxProps['fontSize'];
  bioFontSize?: BoxProps['fontSize'];
  spacing?: StackProps['spacing'];
};

export const ProfileInfo: React.FC<Props> = ({
  address,
  image,
  background,
  name,
  bio,
  emoji,
  isLoaded,
  accounts,
  avatarSize = '2xl',
  nameFontSize = '2xl',
  bioFontSize = 'md',
  spacing = 6,
  ...props
}) => (
  <Box {...props}>
    <Stack align="flex-start" maxW="xl" spacing={spacing}>
      {isLoaded ? (
        <EthAvatar
          size={avatarSize}
          address={address}
          imageUrl={image}
          name={name}
          showBorder
        />
      ) : (
        <SkeletonCircle size="32" />
      )}
      <Skeleton isLoaded={isLoaded}>
        <Heading fontSize={nameFontSize}>
          {name} {emoji}
        </Heading>
      </Skeleton>

      {accounts && isLoaded ? (
        <AccountButtons accounts={accounts} ethAddress={address} />
      ) : null}

      {isLoaded ? (
        bio && (
          <Text color="gray.500" fontSize={bioFontSize}>
            {bio}
          </Text>
        )
      ) : (
        <SkeletonText alignSelf="stretch" noOfLines={4} />
      )}
    </Stack>
  </Box>
);
