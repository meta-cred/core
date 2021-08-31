import { Heading, Spinner, Stack } from '@chakra-ui/react';
import React from 'react';

import { ContributionCard } from '../components/ContributionCard';
import { order_by, useQuery } from '../gqless';
import { Container } from '../layout/Container';
import { PageLayout } from '../layout/PageLayout';

const Index: React.FC = () => {
  const query = useQuery();

  const contributions = query.contributions({
    limit: 10,
    order_by: [{ created_at: order_by.desc }],
  });

  return (
    <PageLayout>
      <Container px="6">
        <Stack spacing="6" py="8">
          <Heading>All Contributions</Heading>
          {query.$state.isLoading ? <Spinner alignSelf="center" /> : null}
          {contributions.map((c) => (
            <ContributionCard
              key={c.id || 0}
              title={c.title}
              category={c.category}
              description={c.description}
              author={c.author.name}
              createdAt={c.created_at}
            />
          ))}
        </Stack>
      </Container>
    </PageLayout>
  );
};

export default Index;
