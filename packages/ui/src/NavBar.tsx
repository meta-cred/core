import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  SlideFade,
  Stack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

export type Props = {
  right?: React.ReactNode;
  logo?: React.ReactNode;
};

export const NavBar: React.FC<Props> = ({ logo, right, children = [] }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bgColor = useColorModeValue(
    'rgba(255, 255, 255, 0.8)',
    'rgba(26, 32, 44, 0.8)',
  );

  const bgCss = {
    backdropFilter: 'saturate(180%) blur(5px)',
    backgroundColor: bgColor,
  };

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
        zIndex={999}
        justify="space-between"
        align="center"
        css={bgCss}
      >
        <HStack spacing={8} alignItems="center">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          {logo}
          <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
            {children}
          </HStack>
        </HStack>
        <HStack align="center">{right}</HStack>
      </Flex>

      <SlideFade in={isOpen} offsetY={-8}>
        <Box
          p={4}
          display={{ md: 'none' }}
          top={16}
          bottom={0}
          zIndex={999}
          pos="fixed"
          w="full"
          minH="calc(100vh - 4rem)"
          css={bgCss}
        >
          <Stack as="nav" spacing={4}>
            {children}
          </Stack>
        </Box>
      </SlideFade>
    </Box>
  );
};
