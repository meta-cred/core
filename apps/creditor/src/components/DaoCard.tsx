import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Skeleton,
} from '@chakra-ui/react';
import { Link } from '@meta-cred/ui/Link';
import { Maybe } from '@meta-cred/utils';
import React from 'react';

type Props = {
  name: Maybe<string>;
  isLoading?: boolean;
};

export const DaoCard: React.FC<Props> = ({ name, isLoading }) => (
  <LinkBox as="article" p={6} borderWidth={1} rounded="lg">
    <Skeleton isLoaded={!isLoading}>
      <Flex
        as={Link}
        LinkComponent={LinkOverlay}
        href={name ? `/dao/${name.toLowerCase()}` : ''}
      >
        <Heading size="md" flex={1}>
          {isLoading ? 'DAO' : name}
        </Heading>
        <ArrowForwardIcon boxSize="6" />
      </Flex>
    </Skeleton>
  </LinkBox>
);
