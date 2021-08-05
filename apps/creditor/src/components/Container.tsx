import { Flex, FlexProps, useColorMode } from '@chakra-ui/react';
import React from 'react';

export const Container: React.FC<FlexProps> = (props) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: 'gray.50', dark: 'gray.900' };

  const color = { light: 'black', dark: 'white' };
  return (
    <Flex
      direction="column"
      align="center"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      pt={20}
      {...props}
    />
  );
};
