import { Box, HStack, Text } from '@chakra-ui/react';
import React from 'react';

import { EthAvatar, EthAvatarProps } from './EthAvatar';

type Props = {
  title: string;
  subtitle?: string | null;
  avatarProps: EthAvatarProps;
};

export const AccountMenuHeader: React.FC<Props> = ({
  title,
  subtitle,
  avatarProps,
}) => (
  <HStack p="3">
    <EthAvatar size="sm" name={title} {...avatarProps} />
    <Box lineHeight="1">
      <Text fontWeight="semibold" fontSize="sm">
        {title}
      </Text>
      {subtitle ? (
        <Text mt="1" fontSize="xs" color="gray.500">
          {subtitle}
        </Text>
      ) : null}
    </Box>
  </HStack>
);
