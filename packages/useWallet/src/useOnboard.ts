import Onboard from 'bnc-onboard';
import {
  API,
  Ens,
  Initialization,
  Wallet,
} from 'bnc-onboard/dist/src/interfaces';
import { ethers, providers } from 'ethers';
import { useCallback, useEffect, useReducer } from 'react';

const SELECTED_WALLET_STORAGE_KEY = '__onboardSelectedWallet__';

type OnboardState = {
  isConnecting: boolean;
  didInit: boolean;
  onboard: API | null;
  wallet: Wallet | null;
  connectedNetworkId: number | null;
  address: string | null;
  balance: string;
  ens: Ens;
  provider: providers.Web3Provider | null;
};

type OnboardAction =
  | {
      type: 'wallet_connected';
      wallet: Wallet;
      provider: providers.Web3Provider;
    }
  | { type: 'set_is_connecting'; isConnecting: boolean }
  | { type: 'set_onboard'; onboard: API }
  | { type: 'disconnect' }
  | { type: 'did_init' }
  | {
      type: 'update_fields';
      payload: Partial<
        Pick<
          OnboardState,
          'isConnecting' | 'address' | 'ens' | 'balance' | 'connectedNetworkId'
        >
      >;
    };

type InitialData = { address?: string; balance?: string };

const getInitialState = (data?: InitialData): OnboardState => ({
  isConnecting: false,
  didInit: false,
  onboard: null,
  wallet: null,
  connectedNetworkId: null,
  address: data?.address || null,
  balance: data?.balance || '0',
  ens: {},
  provider: null,
});

const onboardReducer = (
  state: OnboardState,
  action: OnboardAction,
): OnboardState => {
  switch (action.type) {
    case 'set_is_connecting':
      return {
        ...state,
        isConnecting: action.isConnecting,
      };
    case 'set_onboard':
      return {
        ...state,
        onboard: action.onboard,
      };
    case 'wallet_connected':
      return {
        ...state,
        wallet: action.wallet,
        provider: action.provider,
      };
    case 'update_fields':
      return {
        ...state,
        ...action.payload,
      };
    case 'did_init':
      return {
        ...state,
        didInit: true,
      };
    case 'disconnect':
      return {
        ...getInitialState(),
        onboard: state.onboard,
        didInit: state.didInit,
      };
    default:
      throw new Error();
  }
};

/**
 * A React Web3 wallet hook for [Onboard.js](https://blocknative.com/onboard) library.
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useOnboard = (
  {
    options,
    initialData,
  }: {
    options?: Initialization & { networkId?: number };
    initialData?: InitialData;
  } = {
    options: { networkId: 1 },
    initialData: {},
  },
) => {
  const [state, dispatch] = useReducer(
    onboardReducer,
    initialData,
    getInitialState,
  );

  useEffect(() => {
    const onboard = Onboard({
      ...options,
      networkId: options?.networkId || 1,
      walletCheck: [
        { checkName: 'derivationPath' },
        { checkName: 'accounts' },
        { checkName: 'connect' },
        { checkName: 'network' },
      ],
      subscriptions: {
        ...options?.subscriptions,
        wallet: (selectedWallet) => {
          options?.subscriptions?.wallet?.(selectedWallet);

          if (selectedWallet.provider && selectedWallet.name) {
            const ethersProvider = new ethers.providers.Web3Provider(
              selectedWallet.provider,
            );

            window.localStorage.setItem(
              SELECTED_WALLET_STORAGE_KEY,
              selectedWallet.name,
            );
            dispatch({
              type: 'wallet_connected',
              wallet: selectedWallet,
              provider: ethersProvider,
            });
          }
        },
        address: (newAddress) => {
          options?.subscriptions?.address?.(newAddress);
          if (newAddress) {
            dispatch({
              type: 'update_fields',
              payload: {
                address: newAddress,
              },
            });
          }
        },
        balance: (newBalance) => {
          options?.subscriptions?.balance?.(newBalance);
          if (state.address) {
            dispatch({
              type: 'update_fields',
              payload: {
                balance: newBalance,
              },
            });
          }
        },
        ens: (newEns) => {
          options?.subscriptions?.ens?.(newEns);
          dispatch({
            type: 'update_fields',
            payload: {
              ens: newEns,
            },
          });
        },
        network: (networkId) => {
          options?.subscriptions?.network?.(networkId);
          dispatch({
            type: 'update_fields',
            payload: {
              connectedNetworkId: networkId,
            },
          });
        },
      },
    });

    dispatch({ type: 'set_onboard', onboard });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    state.onboard?.config({ darkMode: options?.darkMode });
  }, [options?.darkMode, state.onboard]);

  const disconnectWallet = useCallback(() => {
    if (state.onboard) {
      dispatch({
        type: 'disconnect',
      });
      state.onboard.walletReset();
      window.localStorage.removeItem(SELECTED_WALLET_STORAGE_KEY);
    }
  }, [state.onboard]);

  useEffect(() => {
    (async () => {
      if (!state.onboard || state.didInit) return;

      const previouslySelectedWallet = window.localStorage.getItem(
        SELECTED_WALLET_STORAGE_KEY,
      );

      if (previouslySelectedWallet) {
        const didSelect = await state.onboard.walletSelect(
          previouslySelectedWallet,
        );
        if (didSelect && previouslySelectedWallet === 'WalletConnect') {
          const isReady = await state.onboard.walletCheck();
          if (!isReady) disconnectWallet();
        }
      }

      dispatch({
        type: 'did_init',
      });
    })();
  }, [state.onboard, state.didInit, disconnectWallet]);

  const selectWallet = useCallback(async () => {
    if (!state.onboard) return;
    dispatch({
      type: 'update_fields',
      payload: {
        isConnecting: true,
      },
    });

    try {
      const didSelect = await state.onboard.walletSelect();
      if (!didSelect) return;

      const isReady = await state.onboard.walletCheck();
      if (!isReady) {
        disconnectWallet();
      }
    } catch (e) {
      disconnectWallet();
    } finally {
      dispatch({
        type: 'update_fields',
        payload: {
          isConnecting: false,
        },
      });
    }
  }, [state.onboard, disconnectWallet]);

  return {
    selectWallet,
    disconnectWallet,
    ...state,
  };
};
