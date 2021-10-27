import { Heading, Stack } from '@chakra-ui/react';
import React from 'react';

import { ContributionCard } from '../components/ContributionCard';
import { order_by, useQuery } from '../gqty';
import { Container } from '../layout/Container';
import { PageLayout } from '../layout/PageLayout';

const Index: React.FC = () => {
  const query = useQuery();

  const contributions = query.contribution({
    limit: 10,
    order_by: [{ created_at: order_by.desc }],
  });

  return (
    <PageLayout>
      <Container px="6">
        <Stack spacing="6" py="8" maxW="2xl" w="100%">
          <Heading>All Contributions</Heading>
          {contributions.map((c) => (
            <ContributionCard
              key={c.id || 0}
              title={c.title}
              description={c.description}
              author={c.author?.user.name}
              createdAt={c.created_at}
              isLoading={!c.id}
            />
          ))}
        </Stack>
      </Container>
    </PageLayout>
  );
};

export default Index;
