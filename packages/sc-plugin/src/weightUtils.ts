import { Contribution, RATING_WEIGHTS } from './types';

export const getContributionNodeWeight = (
  contribution: Contribution,
): number => {
  let denominator = 0;

  if (contribution.votes.length === 0) return 0;

  // Calculate and set weight of contribution based on votes
  const totalVoteWeight = contribution.votes.reduce((total, v) => {
    let weight = RATING_WEIGHTS[v.rating] || 0;

    // If user is voting on their own contribution, weigh it proportionally
    // less according to how much of the contribution weight is going to them
    const selfVote = contribution.contributors.find(
      (c) => c.user.eth_address === v.user.eth_address,
    );
    if (selfVote) {
      const voteWeight = 1 - selfVote.contribution_share;
      denominator += voteWeight;
      weight *= voteWeight;
    } else {
      denominator += 1;
    }
    return total + weight;
  }, 0);

  // Increase weight confidence based on number of people voting
  return (totalVoteWeight / denominator + totalVoteWeight / 10) * 2;
};
