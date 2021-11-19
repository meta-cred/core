import { HStack, StackProps, VStack } from '@chakra-ui/react';
import * as React from 'react';

const MobileNavMenu: React.FC<StackProps & { isOpen?: boolean }> = ({
  isOpen,
  children,
  ...props
}) => (
  <VStack
    hidden={!isOpen}
    position="fixed"
    height="calc(100vh - 4rem)"
    top="16"
    py={4}
    bottom={0}
    insetX="0"
    zIndex={1}
    w="full"
    px="4"
    display={{ md: 'none' }}
    {...props}
  >
    {children}
  </VStack>
);

const DesktopNavMenu: React.FC = ({ children }) => (
  <HStack spacing="3" flex="1" display={{ base: 'none', md: 'flex' }}>
    {children}
  </HStack>
);

export const NavMenu = {
  Mobile: MobileNavMenu,
  Desktop: DesktopNavMenu,
};
