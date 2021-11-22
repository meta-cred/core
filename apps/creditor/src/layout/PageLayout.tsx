import { BackgroundProps, Flex, Heading } from '@chakra-ui/react';
import { Link } from '@meta-cred/ui/Link';
import { NavBar } from '@meta-cred/ui/NavBar';
import { NavItemProps } from '@meta-cred/ui/NavItem';
import { useRouter } from 'next/router';
import React from 'react';

import { ConnectWalletButton } from '@/components/ConnectWalletButton';

type PageLayoutProps = {
  bg?: BackgroundProps['bg'];
  navItems?: NavItemProps[];
};

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  bg,
  navItems = [],
}) => (
  <Flex direction="column" height="100vh" bg={bg}>
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
      items={navItems}
    >
      {/* {LINKS.map(({ label, href }) => ( */}
      {/*  <NavItem key={label} label={label} href={href} /> */}
      {/* ))} */}
    </NavBar>
    {children}
  </Flex>
);
