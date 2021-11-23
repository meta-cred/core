import {
  Box,
  BoxProps,
  Flex,
  Heading,
  HStack,
  Skeleton,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export type Props = BoxProps & {
  daoName: string;
  isLoaded: boolean;
  headerRight?: React.ReactNode;
  pageName: string;
};

export const DaoPageHeader: React.FC<Props> = ({
  daoName,
  isLoaded,
  headerRight,
  pageName,
  ...props
}) => (
  <Box
    pt="8"
    mx="auto"
    w="100%"
    maxW="container.lg"
    px={{ base: 4, md: 8 }}
    {...props}
  >
    <Flex justify="space-between" align="flex-start">
      <Stack>
        <Skeleton isLoaded={isLoaded}>
          <Text color="gray.500">{daoName}</Text>
        </Skeleton>
        <Heading size="lg">{pageName}</Heading>
      </Stack>

      <HStack spacing={{ base: '2', md: '4' }}>{headerRight}</HStack>
    </Flex>
  </Box>
);
