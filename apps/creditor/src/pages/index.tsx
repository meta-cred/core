import { Heading, Stack } from '@chakra-ui/react';
import React from 'react';

import { DaoCard } from '../components/DaoCard';
import { order_by, useQuery } from '../gqty';
import { Container } from '../layout/Container';
import { PageLayout } from '../layout/PageLayout';

const Index: React.FC = () => {
  const query = useQuery();

  const daos = query.dao({
    limit: 10,
    order_by: [{ created_at: order_by.desc }],
  });

  return (
    <PageLayout>
      <Container px="6">
        <Stack spacing="6" py="8" maxW="2xl" w="100%">
          {daos.map((d) => (
            <DaoCard key={d.id || 0} name={d.name} isLoading={!d.id} />
          ))}
        </Stack>
      </Container>
    </PageLayout>
  );
};

export default Index;
