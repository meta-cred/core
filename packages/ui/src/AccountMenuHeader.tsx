import { Box, HStack, Text } from '@chakra-ui/react';
import React from 'react';

import { EthAvatar } from './EthAvatar';

type Props = {
  title: string;
  subtitle?: string | null;
  imageUrl?: string | null;
  address: string;
};

export const AccountMenuHeader: React.FC<Props> = ({
  title,
  subtitle,
  imageUrl,
  address,
}) => (
  <HStack p="3">
    <EthAvatar size="sm" imageUrl={imageUrl} name={title} address={address} />
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
