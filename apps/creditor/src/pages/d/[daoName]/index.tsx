import { Button, useColorModeValue as mode } from '@chakra-ui/react';
import { NavBarSpacer } from '@meta-cred/ui/NavBarSpacer';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import { HiPlus } from 'react-icons/hi';

import { DaoContributionList } from '@/components/DaoContributionList';
import { DaoPageHeader } from '@/components/ui/DaoPageHeader';
import { useQuery } from '@/gqty';
import { Container } from '@/layout/Container';
import { PageLayout } from '@/layout/PageLayout';
import { DaoRoute, getNavItemsForDao } from '@/utils/navHelpers';

const DaoPage: React.FC = () => {
  const router = useRouter();

  const daoName = router.query.daoName as string;
  const q = useQuery();

  const [dao] = q.dao({
    limit: 1,
    where: { name: { _ilike: daoName } },
  });

  const navItems = useMemo(
    () => getNavItemsForDao(daoName, DaoRoute.CONTRIBUTIONS),
    [daoName],
  );

  return (
    <PageLayout bg={mode('gray.50', 'gray.800')} navItems={navItems}>
      <NavBarSpacer />
      <DaoPageHeader
        pageName={DaoRoute.CONTRIBUTIONS}
        daoName={dao.name || ''}
        isLoaded={Boolean(dao.name)}
        headerRight={
          <Button colorScheme="green" leftIcon={<HiPlus />} size="sm">
            New Contribution
          </Button>
        }
      />
      <Container noNavPadding>
        <DaoContributionList dao={dao} px={{ base: 0, md: 4 }} />
      </Container>
    </PageLayout>
  );
};

export default DaoPage;
