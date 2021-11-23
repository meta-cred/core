import { Stack, StackProps } from '@chakra-ui/react';
import React from 'react';

import { dao as Dao, order_by } from '@/gqty';

import { ContributionCard } from './ui/ContributionCard';

export type DaoContributionListProps = StackProps & {
  dao: Dao;
};

export const DaoContributionList: React.FC<DaoContributionListProps> = ({
  dao,
  ...props
}) => {
  const contributions = dao.contributions({
    limit: 10,
    order_by: [{ created_at: order_by.desc }],
  });

  return (
    <Stack my={8} w="100%" spacing={6} {...props}>
      {contributions.map((c) => (
        <ContributionCard
          key={c.id || 0}
          title={c.title}
          description={c.description}
          author={c.author?.user}
          createdAt={c.created_at}
          isLoaded={!!c.id}
        />
      ))}
    </Stack>
  );
};
