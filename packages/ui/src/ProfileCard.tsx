import {
  Avatar,
  Box,
  BoxProps,
  Flex,
  Heading,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

type Props = BoxProps & {
  image?: string;
  background?: string;
  name: string;
  description?: string;
  emoji?: string;
  isLoaded: boolean;
};

export const ProfileCard: React.FC<Props> = ({
  image,
  background,
  name,
  description,
  emoji,
  isLoaded,
  ...props
}) => (
  <Box rounded="md" overflow="hidden" {...props}>
    <Flex justify="center" mt={4}>
      {isLoaded ? (
        <Avatar size="xl" src={image} name={name} showBorder />
      ) : (
        <SkeletonCircle size="24" />
      )}
    </Flex>

    <Box p={6} align="center">
      <Stack align="stretch" mb={5} maxW="xl">
        <Skeleton isLoaded={isLoaded}>
          <Heading fontSize="2xl" fontWeight={500} fontFamily="body">
            {name} {emoji}
          </Heading>
        </Skeleton>

        {isLoaded ? (
          description && <Text color="gray.500">{description}</Text>
        ) : (
          <SkeletonText noOfLines={4} />
        )}
      </Stack>
    </Box>
  </Box>
);
