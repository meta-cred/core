import { Flex, FlexProps } from '@chakra-ui/react';
import React from 'react';

export const NavBarSpacer: React.FC<FlexProps> = (props) => (
  <Flex pt={16} {...props} />
);
