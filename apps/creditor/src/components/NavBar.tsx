import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Stack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

import { DarkModeSwitch } from './DarkModeSwitch';
import { NavItem, Props as NavItemProps } from './NavItem';

export type Props = {
  links: Array<NavItemProps>;
};

export const NavBar: React.FC<Props> = ({ links = [] }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bgColor = useColorModeValue(
    'rgba(255, 255, 255, 0.8)',
    'rgba(26, 32, 44, 0.8)',
  );

  return (
    <Box>
      <Flex
        as="header"
        pos="fixed"
        top={0}
        w="full"
        minH={16}
        px={4}
        boxShadow="sm"
        zIndex="999"
        justify="space-between"
        align="center"
        css={{
          backdropFilter: 'saturate(180%) blur(5px)',
          backgroundColor: bgColor,
        }}
      >
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Heading size="md">MetaCred</Heading>
          <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
            {links.map(({ label, href }) => (
              <NavItem key={label} label={label} href={href} />
            ))}
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <Button variant="solid" mr={4}>
            Connect Wallet
          </Button>
          <DarkModeSwitch />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box
          p={4}
          display={{ md: 'none' }}
          top={16}
          pos="fixed"
          w="full"
          css={{
            backdropFilter: 'saturate(180%) blur(5px)',
            backgroundColor: bgColor,
          }}
        >
          <Stack as="nav" spacing={4}>
            {links.map(({ label, href }) => (
              <NavItem key={label} label={label} href={href} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};
