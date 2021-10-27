import { extendTheme, withDefaultProps } from '@chakra-ui/react';
import { withUseWalletStyles } from '@meta-cred/usewallet';

export const theme = extendTheme(
  {
    colors: {
      black: '#16161D',
    },
    radii: {
      md: '0.425rem',
      lg: '0.8rem',
      xl: '1rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
    },
  },
  withUseWalletStyles(),
);
