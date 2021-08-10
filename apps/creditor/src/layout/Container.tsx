import { Flex, FlexProps, useColorMode } from '@chakra-ui/react';
import React from 'react';

export const Container: React.FC<FlexProps> = (props) => {
  const { colorMode } = useColorMode();

  const color = { light: 'black', dark: 'white' };
  return (
    <Flex
      direction="column"
      align="center"
      color={color[colorMode]}
      pt={20}
      {...props}
    />
  );
};
