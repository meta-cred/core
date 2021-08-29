import { Button, Code, Heading, Text, VStack } from '@chakra-ui/react';
import { useWallet, useWeb3Auth } from '@meta-cred/usewallet';
import { useCeramic } from '@meta-cred/utils';
import React from 'react';

import { IdxUserCard } from '../components/IdxUserCard';
import { Container } from '../layout/Container';
import { PageLayout } from '../layout/PageLayout';

const Index: React.FC = () => {
  const {
    connect3ID,
    disconnect,
    idx,
    isAvailable,
    isConnected,
    isConnecting,
  } = useCeramic();

  const { provider, isConnected: isWalletConnected } = useWallet();

  const { login, authToken, isLoggingIn } = useWeb3Auth(provider);

  return (
    <PageLayout>
      <Container px="6">
        <VStack spacing="6">
          <Heading>Welcome to MetaCred</Heading>
          {isWalletConnected ? (
            <Button isLoading={isLoggingIn} onClick={() => login()}>
              Login with Ethereum
            </Button>
          ) : null}
          {authToken ? (
            <>
              <Text>JWT Token</Text>
              <Code textAlign="center" maxW="xs">
                {authToken}
              </Code>{' '}
            </>
          ) : null}
          {isAvailable ? (
            <Button
              colorScheme={isConnected ? 'red' : undefined}
              isLoading={isConnecting}
              loadingText="Connecting"
              onClick={() => {
                if (!isConnected) {
                  connect3ID();
                } else {
                  disconnect();
                }
              }}
            >
              {isConnected ? 'Disconnect IDX' : 'Connect IDX'}
            </Button>
          ) : null}
          <VStack>
            {isConnected ? <Text>Connected to Ceramic with DID:</Text> : null}
            {idx?.id ? (
              <Code textAlign="center" maxW="xs">
                {idx.id}
              </Code>
            ) : null}
          </VStack>
          {isConnected ? <IdxUserCard /> : null}
        </VStack>
      </Container>
    </PageLayout>
  );
};

export default Index;
