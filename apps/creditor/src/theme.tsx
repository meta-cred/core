import { extendTheme } from '@chakra-ui/react';
import { withUseWalletStyles } from '@meta-cred/usewallet';

export const theme = extendTheme(
  {
    components: {
      Avatar: {
        baseStyle: {
          excessLabel: {
            borderWidth: 2,
            borderColor: 'white',
            marginStart: '0rem',
          },
        },
      },
    },
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
    fonts: {
      heading:
        'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      body: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    },
    styles: {
      global: {
        body: {
          fontVariantLigatures: 'no-contextual',
        },
      },
    },
  },
  withUseWalletStyles(),
);
