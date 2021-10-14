import { useColorMode } from '@chakra-ui/react';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { DarkModeSwitch } from '../DarkModeSwitch';

const mockUseColorMode = useColorMode as jest.MockedFunction<
  typeof useColorMode
>;

describe('DarkModeSwitch', () => {
  it('should render', () => {
    render(<DarkModeSwitch />);
    expect(screen.getByLabelText('Switch to dark mode')).toBeInTheDocument();
  });

  it('should render in dark mode', () => {
    const existing = useColorMode();
    mockUseColorMode.mockReturnValueOnce({ ...existing, colorMode: 'dark' });

    render(<DarkModeSwitch />);
    expect(screen.getByLabelText('Switch to light mode')).toBeInTheDocument();
  });

  it('should change modes', () => {
    const { toggleColorMode } = useColorMode();

    render(<DarkModeSwitch />);

    fireEvent.click(screen.getByLabelText('Switch to dark mode'));
    expect(toggleColorMode).toBeCalledTimes(1);
  });
});
