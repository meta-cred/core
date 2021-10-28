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
  const query = useQuery({
    suspense: true,
  });

  const [dao] = query.dao({
    limit: 1,
    where: { name: { _ilike: daoName } },
  });

  const contributions = dao.contributions({
    limit: 10,
    order_by: [{ created_at: order_by.desc }],
  });

  return (
    <Stack spacing="6" py="8" maxW="2xl" w="100%">
      <Heading>{dao.name} Contributions</Heading>
      {contributions.map((c) => (
        <ContributionCard
          key={c.id || 0}
          title={c.title}
          description={c.description}
          author={
            c.author?.user.name || shortenIfAddress(c.author?.user.eth_address)
          }
          createdAt={c.created_at}
          isLoading={!c.id}
        />
      ))}
    </Stack>
  );
};
