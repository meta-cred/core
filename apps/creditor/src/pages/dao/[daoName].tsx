import { Heading, Stack } from '@chakra-ui/react';
import { shortenIfAddress } from '@meta-cred/utils';
import { useRouter } from 'next/router';
import React from 'react';

import { ContributionCard } from '../../components/ContributionCard';
import { order_by, useQuery } from '../../gqty';
import { Container } from '../../layout/Container';
import { PageLayout } from '../../layout/PageLayout';

const DaoPage: React.FC = () => {
  const router = useRouter();
  const name = router.query.daoName as string;

  const query = useQuery();

  const [dao] = query.dao({
    limit: 1,
    where: { name: { _ilike: name } },
  });

  const contributions = dao.contributions({
    limit: 10,
    order_by: [{ created_at: order_by.desc }],
  });

  return (
    <PageLayout>
      <Container px="6">
        <Stack spacing="6" py="8" maxW="2xl" w="100%">
          <Heading>{dao.name} Contributions</Heading>
          {contributions.map((c) => (
            <ContributionCard
              key={c.id || 0}
              title={c.title}
              description={c.description}
              author={
                c.author?.user.name ||
                shortenIfAddress(c.author?.user.eth_address)
              }
              createdAt={c.created_at}
              isLoading={!c.id}
            />
          ))}
        </Stack>
      </Container>
    </PageLayout>
  );
};

export default DaoPage;
