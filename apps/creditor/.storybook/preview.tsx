import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

import { RouterContext } from 'next/dist/shared/lib/router-context';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import * as NextImage from 'next/image';

import { theme } from '../src/theme';
import { ThemedWalletProvider } from '../src/providers/ThemedWalletProvider';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props: any) => <OriginalNextImage {...props} unoptimized />,
});

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
};

const withChakra = (StoryFn: Function) => {
  return (
    <ChakraProvider theme={theme}>
      <ThemedWalletProvider>
        <StoryFn />
      </ThemedWalletProvider>
    </ChakraProvider>
  );
};

export const decorators = [withChakra];
