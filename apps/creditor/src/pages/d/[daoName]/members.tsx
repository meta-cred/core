import { useColorModeValue as mode } from '@chakra-ui/react';
import { NavBarSpacer } from '@meta-cred/ui/NavBarSpacer';
import { useRouter } from 'next/router';
import React from 'react';

import { DaoMemberList } from '@/components/DaoMemberList';
import { DaoPageHeader } from '@/components/ui/DaoPageHeader';
import { useQuery } from '@/gqty';
import { Container } from '@/layout/Container';
import { PageLayout } from '@/layout/PageLayout';

const DaoMembersPage: React.FC = () => {
  const router = useRouter();

  const daoName = router.query.daoName as string;
  const q = useQuery();

  const [dao] = q.dao({
    limit: 1,
    where: { name: { _ilike: daoName } },
  });

  return (
    <PageLayout bg={mode('gray.50', 'gray.800')}>
      <NavBarSpacer />
      <DaoPageHeader
        title={dao.name || ''}
        daoName={daoName}
        selectedTab={1}
        isLoaded={Boolean(dao.name)}
        pageName="Members"
      />
      <Container noNavPadding maxW="container.xl">
        <DaoMemberList dao={dao} />
      </Container>
    </PageLayout>
  );
};

export default DaoMembersPage;
