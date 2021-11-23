import { useColorModeValue as mode } from '@chakra-ui/react';
import { PropsWithServerCache } from '@gqty/react';
import { NavBarSpacer } from '@meta-cred/ui/NavBarSpacer';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useMemo } from 'react';

import { DaoMemberList } from '@/components/DaoMemberList';
import { DaoPageHeader } from '@/components/ui/DaoPageHeader';
import {
  prepareReactRender,
  query,
  resolved,
  useHydrateCache,
  useQuery,
} from '@/gqty';
import { Container } from '@/layout/Container';
import { PageLayout } from '@/layout/PageLayout';
import { DaoRoute, getNavItemsForDao } from '@/utils/navHelpers';

type DaoPageProps = PropsWithServerCache<{ daoName: string | undefined }>;

const DaoMembersPage: React.FC<DaoPageProps> = ({ daoName, cacheSnapshot }) => {
  useHydrateCache({
    cacheSnapshot,
    shouldRefetch: true,
  });

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

type QueryParams = { daoName: string | undefined };

export const getStaticPaths: GetStaticPaths<QueryParams> = async () => {
  const paths = await resolved(() =>
    query.dao().map((d) => ({
      params: { daoName: d.name?.toLowerCase() },
    })),
  );

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<DaoPageProps, QueryParams> =
  async ({ params }) => {
    const { cacheSnapshot } = await prepareReactRender(
      <DaoMembersPage daoName={params?.daoName} />,
    );

    return {
      props: {
        cacheSnapshot,
        daoName: params?.daoName,
      },
      revalidate: 5,
    };
  };

export default DaoMembersPage;
