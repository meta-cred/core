import {
  Box,
  Heading,
  HStack,
  Skeleton,
  SkeletonText,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { formatDistanceFromNow, Maybe } from '@meta-cred/utils';
import React from 'react';

export type Props = {
  title: Maybe<string>;
  author: Maybe<string>;
  createdAt: Maybe<Date | number | string>;
  category?: Maybe<string>;
  description: Maybe<string>;
  isLoaded?: boolean;
};

export const ContributionCard: React.FC<Props> = ({
  title,
  author,
  createdAt,
  category,
  description,
  isLoaded,
}) => (
  <Box as={Stack} p={6} borderWidth={1} rounded="lg">
    <Skeleton isLoaded={isLoaded} h={6}>
      <Heading size="md" fontWeight="semibold">
        {title || '<title>'}
      </Heading>
    </Skeleton>

    <SkeletonText isLoaded={isLoaded} noOfLines={1}>
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
      {category ? (
        <Tag borderRadius="full" my={2}>
          {category}
        </Tag>
      ) : null}
    </SkeletonText>

    <SkeletonText isLoaded={isLoaded} noOfLines={3} spacing={4}>
      <Text
        color={useColorModeValue('blackAlpha.700', 'whiteAlpha.700')}
        fontSize="sm"
      >
        {description}
      </Text>
    </SkeletonText>
  </Box>
);
