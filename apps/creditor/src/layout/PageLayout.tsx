import { BackgroundProps, Flex, Heading } from '@chakra-ui/react';
import { Link } from '@meta-cred/ui/Link';
import { NavBar } from '@meta-cred/ui/NavBar';
import { NavItemProps } from '@meta-cred/ui/NavItem';
import dynamic from 'next/dynamic';
import React from 'react';

import { Props as ConnectWalletButtonProps } from '@/components/ConnectWalletButton';

const ConnectWalletButton = dynamic<ConnectWalletButtonProps>(
  () =>
    import('@/components/ConnectWalletButton').then(
      (mod) => mod.ConnectWalletButton,
    ),
  { ssr: false },
);

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
