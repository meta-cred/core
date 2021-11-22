import {
  Box,
  Heading,
  HStack,
  Skeleton,
  SkeletonText,
  Stack,
  Tag,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { formatDistanceFromNow, Maybe } from '@meta-cred/utils';
import React from 'react';

import { ContributionRatingButtons } from '@/components/ui/ContributionRatingButtons';
import { UserAvatar } from '@/components/UserAvatar';
import { user as UserType } from '@/gqty';
import { getUserName } from '@/utils/userHelpers';

export type Props = {
  title: Maybe<string>;
  author: Maybe<UserType>;
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
  <Box
    as={Stack}
    p={[3, 5]}
    pb={3}
    borderWidth={{ base: 0, md: 1 }}
    rounded={{ base: 'none', md: 'lg' }}
    shadow={{ base: 'xs', md: 'none' }}
    bg={mode('white', 'gray.700')}
  >
    <Skeleton isLoaded={isLoaded} h={6}>
      <Heading size="md" fontWeight="semibold">
        {title || '<title>'}
      </Heading>
    </Skeleton>

    <SkeletonText isLoaded={isLoaded} noOfLines={1}>
      <HStack>
        <UserAvatar user={author} size="xs" />
        <Stack spacing={[0, 1]} direction={['column', 'row']} lineHeight="1">
          <Text
            fontSize={['xs', 'sm']}
            fontWeight="medium"
            color={mode('gray.700', 'gray.300')}
          >
            {getUserName(author)}
          </Text>
          <Text
            fontSize={['xs', 'sm']}
            color={mode('blackAlpha.600', 'whiteAlpha.600')}
          >
            tracked {formatDistanceFromNow(createdAt)}
          </Text>
        </Stack>
      </HStack>
      {category ? (
        <Tag borderRadius="full" my={2}>
          {category}
        </Tag>
      ) : null}
    </SkeletonText>

    <SkeletonText isLoaded={isLoaded} noOfLines={3} spacing={4}>
      <Text color={mode('blackAlpha.700', 'whiteAlpha.700')} fontSize="sm">
        {description}
      </Text>
    </SkeletonText>
    <Skeleton isLoaded={isLoaded}>
      <ContributionRatingButtons />
    </Skeleton>
  </Box>
);
