import { Flex, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import React from 'react';

import { MobileHamburgerMenu } from './MobileHamburgerMenu';
import { NavItem, NavItemProps } from './NavItem';
import { NavMenu } from './NavMenu';

export type Props = {
  right?: React.ReactNode;
  logo?: React.ReactNode;
  items: NavItemProps[];
};

export const NavBar: React.FC<Props> = ({ logo, right, items = [] }) => {
  const { isOpen, onToggle } = useDisclosure();

  const bgColor = useColorModeValue(
    'rgba(255, 255, 255, 0.8)',
    'rgba(26, 32, 44, 0.8)',
  );

  const bgCss = {
    backdropFilter: 'saturate(180%) blur(10px)',
    backgroundColor: bgColor,
  };

  return (
    <>
      <Flex
        align="center"
        css={bgCss}
        px="6"
        boxShadow={isOpen ? 'none' : 'xs'}
        minH="16"
        zIndex={9}
        top={0}
        w="full"
        pos="fixed"
      >
        <Flex justify="space-between" align="center" w="full">
          <MobileHamburgerMenu onClick={onToggle} isOpen={isOpen} />

          {/* Desktop Logo placement */}
          <Flex
            display={{ base: 'none', md: 'block' }}
            flexShrink={0}
            h="5"
            marginEnd="10"
          >
            {logo}
          </Flex>

          {/* Desktop Navigation Menu */}
          <NavMenu.Desktop>
            {items.map((i) => (
              <NavItem.Desktop key={i.label} {...i} />
            ))}
          </NavMenu.Desktop>

          {/* Mobile Logo placement */}
          <Flex
            flex={{ base: '1', md: '0' }}
            display={{ md: 'none' }}
            flexShrink={0}
            h="5"
          >
            {logo}
          </Flex>

          {right}
        </Flex>
      </Flex>
      <NavMenu.Mobile isOpen={isOpen} css={bgCss}>
        {items.map((i) => (
          <NavItem.Mobile key={i.label} {...i} />
        ))}
      </NavMenu.Mobile>
    </>
  );
};
