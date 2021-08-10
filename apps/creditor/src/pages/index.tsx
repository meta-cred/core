import { Heading, Image, VStack } from '@chakra-ui/react';
import React from 'react';

import { Container } from '../layout/Container';
import { PageLayout } from '../layout/PageLayout';

const Index: React.FC = () => (
  <PageLayout>
    <Container>
      <VStack spacing="6">
        <Image src="/favicon.png" boxSize="32" />
        <Heading>Welcome to MetaCred</Heading>
      </VStack>
    </Container>
  </PageLayout>
);

export default Index;
