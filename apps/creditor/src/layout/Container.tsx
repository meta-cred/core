import { Container as ChakraContainer, ContainerProps } from '@chakra-ui/react';
import React from 'react';

type Props = ContainerProps & {
  noNavPadding?: boolean;
};

export const Container: React.FC<Props> = ({ noNavPadding, ...props }) => (
  <ChakraContainer
    display="flex"
    flexDirection="column"
    alignItems="flex-start"
    maxW="container.md"
    pt={noNavPadding ? 0 : 20}
    flexShrink={0}
    {...props}
  />
);
