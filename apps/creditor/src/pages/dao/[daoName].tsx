import { useRouter } from 'next/router';
import React from 'react';

import { DaoContributionList } from '../../components/DaoContributionList';
import { useQuery } from '../../gqty';
import { Container } from '../../layout/Container';
import { PageLayout } from '../../layout/PageLayout';

const DaoPage: React.FC = () => {
  const router = useRouter();
  const daoName = router.query.daoName as string;
  const q = useQuery();

  const [dao] = q.dao({
    limit: 1,
    where: { name: { _ilike: daoName } },
  });

  return (
    <PageLayout>
      <Container>
        <DaoContributionList dao={dao} />
      </Container>
    </PageLayout>
  );
};

export default DaoPage;
