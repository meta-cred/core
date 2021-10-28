import { Skeleton, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

import { DaoContributionList } from '../../components/DaoContributionList';
import { SafeSuspense } from '../../components/SafeSuspense';
import { Container } from '../../layout/Container';
import { PageLayout } from '../../layout/PageLayout';

const DaoPage: React.FC = () => {
  const router = useRouter();
  const daoName = router.query.daoName as string;

  return (
    <PageLayout>
      <Container>
        <SafeSuspense
          fallback={
            <Stack spacing="6" py="8" w="100%">
              <Skeleton h={6} />
              <Skeleton h={6} />
              <Skeleton h={6} />
            </Stack>
          }
        >
          <DaoContributionList daoName={daoName} />
        </SafeSuspense>
      </Container>
    </PageLayout>
  );
};

export default DaoPage;
