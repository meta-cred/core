import {
  Box,
  Flex,
  Heading,
  IconButton,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import React from 'react';
import { FiEdit } from 'react-icons/fi';

import { ContributionCardAuthorText } from '@/components/ui/ContributionCardAuthorText';
import { ContributionRatingButtons } from '@/components/ui/ContributionRatingButtons';
import { UserAvatarGroup } from '@/components/ui/UserAvatarGroup';
import { contribution as ContributionType, Maybe, order_by } from '@/gqty';
import { useAuthenticatedAddress } from '@/hooks/useAuthenticatedAddress';

export type Props = {
  contribution: Maybe<ContributionType>;
  canEdit?: boolean;
};

export const ContributionCard: React.FC<Props> = ({
  contribution,
  canEdit: propsCanEdit,
}) => {
  const authedAddress = useAuthenticatedAddress();
  const isLoaded = !!contribution?.id;
  const contributors = contribution?.contributors({
    order_by: [{ contribution_share: order_by.desc }],
  });

  const canEdit =
    propsCanEdit ||
    (authedAddress &&
      contribution?.author?.user.eth_address?.toLowerCase() ===
        authedAddress) ||
    Boolean(contributors?.find((c) => c?.user?.eth_address === authedAddress));

  return (
    <Box
      as={Stack}
      p={[3, 5]}
      pb={3}
      borderWidth={{ base: 0, md: 1 }}
      rounded={{ base: 'none', md: 'lg' }}
      shadow={{ base: 'xs', md: 'none' }}
      bg={mode('white', 'gray.700')}
    >
      <Flex direction="row">
        <Stack flex={1}>
          <Skeleton isLoaded={isLoaded}>
            <Heading size="md" fontWeight="semibold">
              {contribution?.title || '<title>'}
            </Heading>
          </Skeleton>
          <SkeletonText isLoaded={isLoaded} noOfLines={1}>
            <ContributionCardAuthorText
              user={contribution?.author?.user}
              date={contribution?.created_at}
            />
          </SkeletonText>
        </Stack>

        {canEdit && isLoaded ? (
          <IconButton
            aria-label="Edit"
            icon={<FiEdit />}
            rounded="full"
            size="sm"
          />
        ) : null}
      </Flex>
      <Skeleton isLoaded={isLoaded} alignSelf="flex-start">
        <UserAvatarGroup users={contributors?.map((c) => c.user)} />
      </Skeleton>

      <SkeletonText isLoaded={isLoaded} noOfLines={3} spacing={4}>
        <Text color={mode('blackAlpha.700', 'whiteAlpha.700')} fontSize="sm">
          {contribution?.description}
        </Text>
      </SkeletonText>
      <Skeleton isLoaded={isLoaded}>
        <ContributionRatingButtons />
      </Skeleton>
    </Box>
  );
};
