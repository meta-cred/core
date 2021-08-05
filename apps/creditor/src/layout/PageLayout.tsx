import React from 'react';

import { NavBar } from '../components/NavBar';

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
];

export const PageLayout: React.FC = ({ children }) => (
  <>
    <NavBar links={LINKS} />
    {children}
  </>
);
