import { useClipboard } from '@chakra-ui/react';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { AccountModal } from '../AccountModal';

const mockUseClipboard = useClipboard as jest.MockedFunction<
  typeof useClipboard
>;

describe('AccountModal', () => {
  const props = {
    address: 'address',
    onDisconnect: jest.fn(),
    isOpen: true,
    onClose: jest.fn(),
  };

  it('should render', () => {
    render(<AccountModal {...props} />);
    expect(screen.getByDisplayValue(props.address)).toBeInTheDocument();
  });

  it('should render custom displayName', () => {
    render(<AccountModal {...props} displayName="metadreamer.eth" />);
    expect(screen.queryByDisplayValue(props.address)).not.toBeInTheDocument();
    expect(screen.getByDisplayValue('metadreamer.eth')).toBeInTheDocument();
  });

  it('should render connected wallet', () => {
    render(
      <AccountModal {...props} connectedWallet="MetaMask" address={null} />,
    );
    expect(screen.getByText('Connected To MetaMask')).toBeInTheDocument();
  });

  it('should render children', () => {
    const children = 'test children';

    render(<AccountModal {...props}>{children}</AccountModal>);
    expect(screen.getByText(children)).toBeInTheDocument();
  });

  it('should call onDisconnect and close modal when Disconnect pressed', () => {
    render(<AccountModal {...props} />);

    fireEvent.click(screen.getByText('Disconnect'));
    expect(props.onDisconnect).toBeCalledTimes(1);
    expect(props.onClose).toBeCalledTimes(1);
  });

  it('should copy to clipboard when Copy pressed', () => {
    const clipboard = useClipboard(props.address);

    render(<AccountModal {...props} />);

    fireEvent.click(screen.getByText('Copy'));
    expect(clipboard.onCopy).toBeCalledTimes(1);
  });

  it('should show Copied if user pressed Copy button', () => {
    const clipboard = useClipboard(props.address);
    mockUseClipboard.mockReturnValueOnce({ ...clipboard, hasCopied: true });

    render(<AccountModal {...props} />);

    expect(screen.getByText('Copied')).toBeInTheDocument();
  });
});
