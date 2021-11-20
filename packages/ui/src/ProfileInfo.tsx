import {
  Box,
  BoxProps,
  Heading,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

import { AccountButtons, AccountButtonsProps } from './AccountButtons';
import { EthAvatar } from './EthAvatar';

type Props = BoxProps & {
  address?: string | null;
  image?: string;
  background?: string;
  name: string;
  description?: string;
  emoji?: string;
  isLoaded: boolean;
  accounts?: AccountButtonsProps['accounts'];
};

export const ProfileInfo: React.FC<Props> = ({
  address,
  image,
  background,
  name,
  description,
  emoji,
  isLoaded,
  accounts,
  ...props
}) => (
  <Box {...props}>
    <Stack align="flex-start" mb={5} maxW="xl" spacing={6}>
      {isLoaded ? (
        <EthAvatar
          size="2xl"
          address={address}
          imageUrl={image}
          name={name}
          showBorder
        />
      ) : (
        <SkeletonCircle size="32" />
      )}
      <Skeleton isLoaded={isLoaded}>
        <Heading fontSize="2xl">
          {name} {emoji}
        </Heading>
      </Skeleton>

      {accounts && isLoaded ? (
        <AccountButtons
          accounts={accounts}
          ethAddress={address}
          justify="center"
        />
      ) : null}

      {isLoaded ? (
        description && <Text color="gray.500">{description}</Text>
      ) : (
        <SkeletonText alignSelf="stretch" noOfLines={4} />
      )}
    </Stack>
  </Box>
);
