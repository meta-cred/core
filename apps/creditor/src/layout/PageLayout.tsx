import { Heading } from '@chakra-ui/react';
import { NavBar } from '@meta-cred/ui/NavBar';
import { NavItem } from '@meta-cred/ui/NavItem';
import React from 'react';

import { ConnectWalletButton } from '@/components/ConnectWalletButton';

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
];

export const PageLayout: React.FC = ({ children }) => (
  <>
    <NavBar
      logo={
        <Heading size="md" marginInlineStart={0}>
          MetaCred
        </Heading>
      }
      right={
        <>
          <ConnectWalletButton />
        </>
      }
    >
      {LINKS.map(({ label, href }) => (
        <NavItem key={label} label={label} href={href} />
      ))}
    </NavBar>
    {children}
  </>
);
