import {
  Button,
  useBreakpointValue,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { PropsWithServerCache } from '@gqty/react';
import { NavBarSpacer } from '@meta-cred/ui/NavBarSpacer';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useMemo } from 'react';
import { FiPlus } from 'react-icons/fi';

import { DaoContributionList } from '@/components/DaoContributionList';
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

const DaoPage: React.FC<DaoPageProps> = ({ daoName, cacheSnapshot }) => {
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
    () => getNavItemsForDao(daoName, DaoRoute.CONTRIBUTIONS),
    [daoName],
  );

  const buttonTitle = useBreakpointValue(['New', 'New Contribution']);

  return (
    <PageLayout bg={mode('gray.50', 'gray.800')} navItems={navItems}>
      <NavBarSpacer />
      <DaoPageHeader
        pageName={DaoRoute.CONTRIBUTIONS}
        daoName={dao.name || ''}
        isLoaded={Boolean(dao.name)}
        headerRight={
          <Button colorScheme="green" leftIcon={<FiPlus />} size="sm">
            {buttonTitle}
          </Button>
        }
      />
      <Container noNavPadding px={{ base: 0, md: 4 }}>
        <DaoContributionList dao={dao} px={{ base: 0, md: 4 }} />
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
      <DaoPage daoName={params?.daoName} />,
    );

    return {
      props: {
        cacheSnapshot,
        daoName: params?.daoName,
      },
      revalidate: 1,
    };
  };

export default DaoPage;
