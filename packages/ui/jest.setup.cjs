require('@testing-library/jest-dom');

const toggleColorMode = jest.fn();
const setColorMode = jest.fn();
const onCopy = jest.fn();

jest.mock('@chakra-ui/react', () => ({
  ...jest.requireActual('@chakra-ui/react'),
  useColorMode: jest.fn(() => ({
    toggleColorMode,
    setColorMode,
    colorMode: 'light',
  })),
  useClipboard: jest.fn(() => ({
    hasCopied: false,
    onCopy
  }))
}));
