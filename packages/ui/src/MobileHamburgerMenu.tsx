import { Box } from '@chakra-ui/react';
import * as React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

interface MobileHamburgerMenuProps {
  onClick?: VoidFunction;
  isOpen: boolean;
}

export const MobileHamburgerMenu: React.FC<MobileHamburgerMenuProps> = (
  props,
) => {
  const { onClick, isOpen } = props;
  return (
    <Box ms="-4" minW={{ base: '12', md: '76px' }} display={{ md: 'none' }}>
      <Box as="button" onClick={onClick} p="2" fontSize="xl">
        <Box aria-hidden as={isOpen ? FiX : FiMenu} />
        <Box srOnly>{isOpen ? 'Close menu' : 'Open menu'}</Box>
      </Box>
    </Box>
  );
};
