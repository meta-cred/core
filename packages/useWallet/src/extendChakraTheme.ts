import { theme as defaultTheme } from '@chakra-ui/theme';

export const withUseWalletStyles = (
  colorScheme = 'blue',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Record<string, any> => ({
  styles: {
    global: {
      '.bn-onboard-custom.bn-onboard-modal': {
        zIndex: 99,
        backdropFilter: 'blur(6px)',
      },
      '.bn-onboard-custom.bn-onboard-modal-content': {
        marginX: '4',
        maxWidth: 'md',
        shadow: 'lg',
      },
      '.bn-onboard-custom.bn-onboard-modal-content.bn-onboard-dark-mode': {
        backgroundColor: 'gray.700',
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
        color: `${colorScheme}.400`,
        borderRadius: 'md',
        fontSize: 'md',
        height: '10',
      },
      'button.bn-onboard-custom.bn-onboard-prepare-button.bn-onboard-dark-mode-link':
        {
          backgroundColor: 'whiteAlpha.100',
          color: `${colorScheme}.400`,
        },
      'button.bn-onboard-custom.bn-onboard-icon-button': {
        ...defaultTheme.components.Button.baseStyle,
        borderRadius: 'md',
        transitionProperty: 'var(--chakra-transition-property-common)',
        transitionDuration: 'var(--chakra-transition-duration-normal)',
        width: { base: '100%', md: '52' },
        ':hover': {
          background: 'blackAlpha.200',
          boxShadow: 'none',
        },
      },
      'button.bn-onboard-custom.bn-onboard-icon-button.bn-onboard-dark-mode-background-hover':
        {
          ':hover': {
            background: 'whiteAlpha.100',
          },
        },
      'button.bn-onboard-custom.bn-onboard-icon-button.bn-onboard-dark-mode-background-hover.bn-onboard-selected-wallet':
        {
          background: 'whiteAlpha.100',
          ':hover': {
            background: 'whiteAlpha.200',
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
      '.bn-onboard-custom.bn-onboard-modal-content-close.bn-onboard-dark-mode-close-background':
        {
          ':hover': {
            background: 'whiteAlpha.100',
          },
        },
      '.bn-onboard-custom.bn-onboard-select-info-container > button': {
        display: 'none',
      },
    },
  },
});
