import { Heading, VStack } from '@chakra-ui/react';
import { useCeramic } from '@meta-cred/utils';
import React from 'react';

import { IdxUserCard } from '../components/IdxUserCard';
import { Container } from '../layout/Container';
import { PageLayout } from '../layout/PageLayout';

const Index: React.FC = () => {
  const { isConnected } = useCeramic();

  return (
    <PageLayout>
      <Container px="6">
        <VStack spacing="6">
          <Heading>Welcome to MetaCred</Heading>

          {isConnected ? <IdxUserCard /> : null}
        </VStack>
      </Container>
    </PageLayout>
  );
};

export default Index;
