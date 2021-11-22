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
import { EthAvatar, EthAvatarProps } from './EthAvatar';

type Props = BoxProps & {
  address?: string | null;
  name: string;
  bio?: string;
  emoji?: string;
  isLoaded: boolean;
  avatarProps: EthAvatarProps;
  accounts?: AccountButtonsProps['accounts'];
  nameFontSize?: BoxProps['fontSize'];
  bioFontSize?: BoxProps['fontSize'];
  spacing?: StackProps['spacing'];
};

export const ProfileInfo: React.FC<Props> = ({
  address,
  name,
  bio,
  emoji,
  isLoaded,
  accounts,
  avatarProps,
  nameFontSize = '2xl',
  bioFontSize = 'md',
  spacing = 6,
  ...props
}) => (
  <Box {...props}>
    <Stack align="flex-start" maxW="xl" spacing={spacing}>
      {isLoaded ? (
        <EthAvatar
          size="2xl"
          address={address}
          name={name}
          showBorder
          {...avatarProps}
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
