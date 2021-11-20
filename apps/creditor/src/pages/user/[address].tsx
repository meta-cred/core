import { Button } from '@chakra-ui/react';
import type { ImageSources } from '@datamodels/identity-profile-basic';
import { PropsWithServerCache } from '@gqty/react';
import { Link } from '@meta-cred/ui/Link';
import { ProfileInfo } from '@meta-cred/ui/ProfileInfo';
import {
  getSelfIdImageUrl,
  getSelfIdProfileLink,
  isAddressEqual,
  resolveIfEnsName,
} from '@meta-cred/utils';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import {
  dehydrate,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import {
  Maybe,
  prepareReactRender,
  query,
  resolved,
  useHydrateCache,
  useQuery,
} from '@/gqty';
import { useUser } from '@/hooks/useUser';
import { Container } from '@/layout/Container';
import { PageLayout } from '@/layout/PageLayout';
import { defaultMainnetProvider } from '@/utils/defaultProvider';

type UserPageProps = PropsWithServerCache<{
  address: string;
  resolvedAddress: string | null;
}>;

const UserPage: React.FC<UserPageProps> = ({
  cacheSnapshot,
  address,
  resolvedAddress,
}) => {
  const { user: myUser, isLoading } = useUser();

  useHydrateCache({
    cacheSnapshot,
    shouldRefetch: true,
  });

  const profileQuery = useQuery();
  const profile = profileQuery.selfIdProfile({ address });
  const accounts = profileQuery.selfIdAccounts({ address });

  const isLoaded = Boolean(!profileQuery.$state.isLoading || address);

  return (
    <PageLayout>
      <Container maxW="container.sm">
        <ProfileInfo
          mt={4}
          address={resolvedAddress || address}
          name={profile?.name || address || 'No Name'}
          description={profile?.description || ''}
          image={getSelfIdImageUrl(profile?.image as Maybe<ImageSources>)}
          background={getSelfIdImageUrl(
            profile?.background as Maybe<ImageSources>,
          )}
          emoji={profile?.emoji || ''}
          rounded="none"
          isLoaded={isLoaded}
          accounts={accounts?.map((a) => ({
            id: a?.id,
            host: a?.host,
            protocol: a?.protocol,
          }))}
        />

        {!isLoading && isAddressEqual(myUser?.eth_address, resolvedAddress) ? (
          <Button
            size="sm"
            as={Link}
            isExternal
            href={getSelfIdProfileLink(myUser?.did || '')}
            rightIcon={<FiExternalLink />}
            variant="outline"
          >
            Edit Profile on Self.ID
          </Button>
        ) : null}
      </Container>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps<UserPageProps> = async ({
  params,
}) => {
  const address = params?.address as string | undefined;
  if (!address) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const resolvedAddress = await resolveIfEnsName(
    address,
    defaultMainnetProvider,
  );

  const queryClient = new QueryClient();
  queryClient.setQueryData(['ensAddress', address], resolvedAddress);

  const dehydratedState = dehydrate(queryClient);

  const { cacheSnapshot } = await prepareReactRender(
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <UserPage address={address} resolvedAddress={resolvedAddress} />
      </Hydrate>
    </QueryClientProvider>,
  );

  return {
    props: {
      cacheSnapshot,
      address,
      resolvedAddress,
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 5,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await resolved(() =>
    query.user().map((u) => ({
      params: { address: u.eth_address },
    })),
  );

  return { paths, fallback: 'blocking' };
};

export default UserPage;
