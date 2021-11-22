import { useColorModeValue as mode } from '@chakra-ui/react';
import { NavBarSpacer } from '@meta-cred/ui/NavBarSpacer';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';

import { DaoMemberList } from '@/components/DaoMemberList';
import { DaoPageHeader } from '@/components/ui/DaoPageHeader';
import { useQuery } from '@/gqty';
import { Container } from '@/layout/Container';
import { PageLayout } from '@/layout/PageLayout';
import { DaoRoute, getNavItemsForDao } from '@/utils/navHelpers';

const DaoMembersPage: React.FC = () => {
  const router = useRouter();

  const daoName = router.query.daoName as string;
  const q = useQuery();

  const [dao] = q.dao({
    limit: 1,
    where: { name: { _ilike: daoName } },
  });

  const navItems = useMemo(
    () => getNavItemsForDao(daoName, DaoRoute.MEMBERS),
    [daoName],
  );

  return (
    <PageLayout bg={mode('gray.50', 'gray.800')} navItems={navItems}>
      <NavBarSpacer />
      <DaoPageHeader
        pageName={DaoRoute.MEMBERS}
        daoName={dao.name || ''}
        isLoaded={Boolean(dao.name)}
      />
      <Container noNavPadding>
        <DaoMemberList dao={dao} />
      </Container>
    </PageLayout>
  );
};

export default DaoMembersPage;
