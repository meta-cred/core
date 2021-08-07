import { Heading } from '@chakra-ui/react';
import { ConnectWalletButton } from '@meta-cred/ui/ConnectWalletButton';
import { DarkModeSwitch } from '@meta-cred/ui/DarkModeSwitch';
import { NavBar } from '@meta-cred/ui/NavBar';
import { NavItem } from '@meta-cred/ui/NavItem';
import React from 'react';

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
];

export const PageLayout: React.FC = ({ children }) => (
  <>
    <NavBar
      logo={<Heading size="md">MetaCred</Heading>}
      right={
        <>
          <ConnectWalletButton />
          <DarkModeSwitch />
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
