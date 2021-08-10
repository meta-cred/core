import { extendTheme } from '@chakra-ui/react';
import { theme as defaultTheme } from '@chakra-ui/theme';

export const theme = extendTheme({
  colors: {
    black: '#16161D',
  },
  styles: {
    global: {
      '.bn-onboard-custom.bn-onboard-modal': {
        zIndex: 99,
      },
      '.bn-onboard-custom.bn-onboard-modal-content': {
        marginX: '4',
        maxWidth: 'md',
      },
      '.bn-onboard-custom.bn-onboard-modal-content.bn-onboard-dark-mode': {
        backgroundColor: 'gray.800',
      },
      '.bn-onboard-custom.bn-onboard-modal-content-header-icon': {
        display: 'none',
      },
      '.bn-onboard-custom.bn-onboard-select-wallet-info': {
        display: 'none',
      },
      'button.bn-onboard-custom.bn-onboard-prepare-button': {
        ...defaultTheme.components.Button.baseStyle,
        borderWidth: 0,
        backgroundColor: 'blackAlpha.200',
        color: 'blue.400',
        borderRadius: 'md',
        fontSize: 'md',
        height: '10',
      },
      'button.bn-onboard-custom.bn-onboard-prepare-button.bn-onboard-dark-mode-link':
        {
          backgroundColor: 'whiteAlpha.100',
          color: 'blue.400',
        },
      'button.bn-onboard-custom.bn-onboard-icon-button': {
        ...defaultTheme.components.Button.baseStyle,
        borderRadius: 'md',
        transitionProperty: 'var(--chakra-transition-property-common)',
        transitionDuration: 'var(--chakra-transition-duration-normal)',
        width: { base: '56', md: '52' },
        ':hover': {
          background: 'blackAlpha.200',
          boxShadow: 'none',
        },
        '.bn-onboard-dark-mode-background-hover': {
          ':hover': {
            background: 'whiteAlpha.100',
          },
        },
      },
      'button.bn-onboard-custom.bn-onboard-icon-button.bn-onboard-dark-mode-background-hover':
        {
          ':hover': {
            background: 'whiteAlpha.100',
          },
        },
      'ul.bn-onboard-custom.bn-onboard-modal-select-wallets': {
        marginBottom: '0px !important',
      },
      '.bn-onboard-custom.bn-onboard-modal-content-close': {
        height: '1rem',
        width: '1rem',
        top: '1rem',
        right: '1rem',
        boxSizing: 'content-box',
        borderRadius: 'full',
        padding: '0.5rem',
      },
      '.bn-onboard-custom.bn-onboard-modal-content-close > svg': {
        width: '3',
        height: '3',
      },
      '.bn-onboard-custom.bn-onboard-select-info-container > button': {
        display: 'none',
      },
    },
  },
});
