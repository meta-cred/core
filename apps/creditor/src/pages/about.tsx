import { Heading } from '@chakra-ui/react';
import React from 'react';

import { Container } from '@/layout/Container';
import { PageLayout } from '@/layout/PageLayout';

const About: React.FC = () => (
  <PageLayout>
    <Container minHeight="100vh">
      <Heading>About</Heading>
    </Container>
  </PageLayout>
);

export default About;
