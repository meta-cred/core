import { useContext } from 'react';

import { IWalletContext, WalletContext } from './WalletProvider';

export const useWallet = (): IWalletContext => useContext(WalletContext);
