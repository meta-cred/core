import { Heading } from '@chakra-ui/react';
import React from 'react';

import { Container } from '../components/Container';
import { PageLayout } from '../layout/PageLayout';

const Index: React.FC = () => (
  <PageLayout>
    <Container minHeight="100vh">
      <Heading>Welcome to MetaCred</Heading>
    </Container>
  </PageLayout>
);

export default Index;
