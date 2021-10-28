import { Heading, Stack } from '@chakra-ui/react';
import { shortenIfAddress } from '@meta-cred/utils';
import React from 'react';

import { order_by, useQuery } from '../gqty';
import { ContributionCard } from './ContributionCard';

export type DaoContributionListProps = {
  daoName: string;
};

export const DaoContributionList: React.FC<DaoContributionListProps> = ({
  daoName,
}) => {
  const q = useQuery({
    suspense: true,
    prepare({ prepass, query }) {
      prepass(
        query.dao,
        'id',
        'name',
        'contributions.id',
        'contributions.title',
      );
    },
  });

  const [dao] = q.dao({
    limit: 1,
    where: { name: { _ilike: daoName } },
  });

  const contributions = dao.contributions({
    limit: 10,
    order_by: [{ created_at: order_by.desc }],
  });

  return (
    <>
      <Heading mt={8}>{dao.name} Contributions</Heading>
      <Stack my={8} w="100%">
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
    </>
  );
};
