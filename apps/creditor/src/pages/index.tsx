import { Stack } from '@chakra-ui/react';
import { PropsWithServerCache } from '@gqty/react';
import { GetStaticProps } from 'next';
import React from 'react';

import { DaoCard } from '@/components/DaoCard';
import {
  order_by,
  prepareReactRender,
  useHydrateCache,
  useQuery,
} from '@/gqty';
import { Container } from '@/layout/Container';
import { PageLayout } from '@/layout/PageLayout';

type HomePageProps = PropsWithServerCache;

const HomePage: React.FC<HomePageProps> = ({ cacheSnapshot }) => {
  useHydrateCache({
    cacheSnapshot,
    shouldRefetch: true,
  });

  const query = useQuery();

  const daos = query.dao({
    limit: 10,
    order_by: [{ created_at: order_by.desc }],
  });

  return (
    <PageLayout>
      <Container>
        <Stack spacing="6" py="8" w="100%">
          {daos.map((d) => (
            <DaoCard key={d.id || 0} name={d.name} isLoading={!d.id} />
          ))}
        </Stack>
      </Container>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const { cacheSnapshot } = await prepareReactRender(<HomePage />);

  return {
    props: {
      cacheSnapshot,
    },
    revalidate: 5,
  };
};

export default HomePage;
