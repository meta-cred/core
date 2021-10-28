import { Container as ChakraContainer, ContainerProps } from '@chakra-ui/react';
import React from 'react';

export const Container: React.FC<ContainerProps> = (props) => (
  <ChakraContainer
    display="flex"
    flexDirection="column"
    alignItems="flex-start"
    maxW="container.md"
    pt={20}
    flexShrink={0}
    {...props}
  />
);
