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

type Props = {
  title: Maybe<string>;
  author: Maybe<string>;
  createdAt: Maybe<Date | number | string>;
  category?: Maybe<string>;
  description: Maybe<string>;
  isLoading?: boolean;
};

export const ContributionCard: React.FC<Props> = ({
  title,
  author,
  createdAt,
  category,
  description,
  isLoading,
}) => (
  <Box p={6} borderWidth={1} rounded="lg">
    <Stack>
      <Skeleton isLoaded={!isLoading} h={6}>
        <Heading size="md" fontWeight="semibold">
          {isLoading ? 'Title Is Loading' : title}
        </Heading>
      </Skeleton>

      <SkeletonText isLoaded={!isLoading} noOfLines={1}>
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

      <SkeletonText isLoaded={!isLoading} noOfLines={3} spacing={4}>
        <Text
          color={useColorModeValue('blackAlpha.700', 'whiteAlpha.700')}
          fontSize="sm"
        >
          {description}
        </Text>
      </SkeletonText>
    </Stack>
  </Box>
);
