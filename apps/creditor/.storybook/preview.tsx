import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

import { RouterContext } from 'next/dist/shared/lib/router-context';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { DarkModeSwitch } from '@meta-cred/ui';
import * as NextImage from 'next/image';
import { theme } from '../src/theme';
import { ThemedWalletProvider } from '../src/providers/ThemedWalletProvider';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props: any) => <OriginalNextImage {...props} unoptimized />,
});

export const VIEWPORTS = {
  iphone5: {
    name: 'iPhone SE',
    styles: {
      height: '568px',
      width: '320px',
    },
    type: 'mobile',
  },
  iphoneMini: {
    name: 'iPhone Mini',
    styles: {
      height: '812px',
      width: '375px',
    },
    type: 'mobile',
  },
  iphone: {
    name: 'iPhone',
    styles: {
      height: '844px',
      width: '390px',
    },
    type: 'mobile',
  },
  iphoneMax: {
    name: 'iPhone Max',
    styles: {
      height: '926px',
      width: '428px',
    },
    type: 'mobile',
  },
  ipad: {
    name: 'iPad',
    styles: {
      height: '1024px',
      width: '768px',
    },
    type: 'tablet',
  },
  ipad11: {
    name: 'iPad 11in',
    styles: {
      height: '1194px',
      width: '834px',
    },
    type: 'tablet',
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  viewport: {
    viewports: VIEWPORTS,
  },
};

const ColorModeToggleBar = () => (
  <Flex justify="flex-end" mb={4}>
    <DarkModeSwitch />
  </Flex>
);

const withChakra = (StoryFn: Function) => {
  return (
    <ChakraProvider theme={theme}>
      <ThemedWalletProvider>
        <ColorModeToggleBar />
        <StoryFn />
      </ThemedWalletProvider>
    </ChakraProvider>
  );
};

export const decorators = [withChakra];
