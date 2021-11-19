import { Box, Flex, HStack, useColorModeValue as mode } from '@chakra-ui/react';
import * as React from 'react';

import { Link } from './Link';

export type NavItemProps = {
  href?: string;
  active?: boolean;
  label: string;
  icon?: React.ReactNode;
};

const DesktopNavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  href = '#',
  active,
}) => (
  <HStack
    as={Link}
    href={href}
    aria-current={active ? 'page' : undefined}
    spacing="2"
    px="3"
    py="2"
    rounded="md"
    transition="all 0.2s"
    color="gray.500"
    _hover={{ bg: 'blackAlpha.50', textDecoration: 'none' }}
    _activeLink={{
      bg: mode('blackAlpha.100', 'whiteAlpha.100'),
      color: mode('gray.500', 'gray.100'),
    }}
  >
    {icon && (
      <Box aria-hidden fontSize="md">
        {icon}
      </Box>
    )}
    <Box fontWeight="semibold">{label}</Box>
  </HStack>
);

const MobileNavItem: React.FC<NavItemProps> = ({
  label,
  href = '#',
  active,
  icon,
}) => (
  <Flex
    align="center"
    as={Link}
    href={href}
    px="3"
    py="3"
    rounded="md"
    flexDir="row"
    fontWeight="semibold"
    aria-current={active ? 'page' : undefined}
    color="gray.500"
    _hover={{ bg: 'blackAlpha.50', textDecoration: 'none' }}
    _activeLink={{
      bg: mode('blackAlpha.100', 'whiteAlpha.100'),
      color: mode('gray.500', 'gray.100'),
    }}
  >
    {icon && (
      <Box aria-hidden fontSize="md" mr="2">
        {icon}
      </Box>
    )}
    {label}
  </Flex>
);

export const NavItem = {
  Desktop: DesktopNavItem,
  Mobile: MobileNavItem,
};
