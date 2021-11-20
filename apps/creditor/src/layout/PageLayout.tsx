import { Flex, Heading } from '@chakra-ui/react';
import { Link } from '@meta-cred/ui/Link';
import { NavBar } from '@meta-cred/ui/NavBar';
import { useRouter } from 'next/router';
import React from 'react';

import { ConnectWalletButton } from '@/components/ConnectWalletButton';

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
];

export const PageLayout: React.FC = ({ children }) => {
  const router = useRouter() || {};

  return (
    <Flex direction="column" height="100vh">
      <NavBar
        logo={
          <Heading
            as={Link}
            display="block"
            noUnderline
            href="/"
            size="md"
            align="center"
            marginInlineStart={0}
            _hover={{
              textDecoration: 'none',
            }}
          >
            MetaCred
          </Heading>
        }
        right={
          <>
            <ConnectWalletButton />
          </>
        }
        items={LINKS.map((l) => ({ active: router.pathname === l.href, ...l }))}
      >
        {/* {LINKS.map(({ label, href }) => ( */}
        {/*  <NavItem key={label} label={label} href={href} /> */}
        {/* ))} */}
      </NavBar>
      {children}
    </Flex>
  );
};
