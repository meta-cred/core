import { useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import { Link } from './Link';

export type Props = { label: string; href: string };

export const NavItem: React.FC<Props> = ({ label, href }) => (
  <Link
    p={2}
    rounded="md"
    fontSize="sm"
    fontWeight={500}
    color={useColorModeValue('gray.600', 'gray.200')}
    _hover={{
      textDecoration: 'none',
      color: useColorModeValue('gray.800', 'white'),
    }}
    href={href}
  >
    {label}
  </Link>
);
