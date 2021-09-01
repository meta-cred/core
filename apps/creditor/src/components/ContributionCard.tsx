import {
  Box,
  Heading,
  HStack,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { formatDistanceFromNow, Maybe } from '@meta-cred/utils';
import React from 'react';

type Props = {
  title: Maybe<string>;
  author: Maybe<string>;
  createdAt: Maybe<Date | number | string>;
  category: Maybe<string>;
  description: Maybe<string>;
};
export const ContributionCard: React.FC<Props> = ({
  title,
  author,
  createdAt,
  category,
  description,
}) => (
  <Box p={6} borderWidth={1} rounded="lg" maxW="2xl">
    <Stack>
      <Heading size="md" fontWeight="semibold">
        {title}
      </Heading>
      <HStack>
        <Text
          fontSize="sm"
          fontWeight="medium"
          color={useColorModeValue('gray.700', 'gray.300')}
        >
          {author}
        </Text>
        <Text
          fontSize="sm"
          color={useColorModeValue('blackAlpha.600', 'whiteAlpha.600')}
        >
          tracked {formatDistanceFromNow(createdAt)}
        </Text>
      </HStack>
      <HStack py={2}>
        <Tag borderRadius="full">{category}</Tag>
      </HStack>
      <Text
        color={useColorModeValue('blackAlpha.700', 'whiteAlpha.700')}
        fontSize="sm"
      >
        {description || 'No Description'}
      </Text>
    </Stack>
  </Box>
);
