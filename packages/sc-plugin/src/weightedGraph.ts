import { sourcecred as sc, WeightedGraphJSON } from 'sourcecred';

import { getNodeAddressForEthAddress } from './addressUtils';
import {
  EdgeNames,
  getEdgeAddress,
  getNodeAddress,
  NodeNames,
} from './declaration';
import { Contribution, RATING_WEIGHTS } from './types';

export const createWeightedGraph = (
  contributions: Contribution[],
): WeightedGraphJSON => {
  const { graph, weights } = sc.core.weightedGraph.empty();

  for (const contribution of contributions) {
    const contributionTimestamp = +new Date(contribution.date);
    const contributionNodeAddress = getNodeAddress(
      NodeNames.Contribution,
      contribution.id,
    );
    // Add contribution node
    graph.addNode({
      address: contributionNodeAddress,
      description: contribution.title,
      timestampMs: contributionTimestamp,
    });

    // Calculate and set weight of contribution based on votes
    const totalVoteWeight = contribution.votes.reduce(
      (total, v) => total + RATING_WEIGHTS[v.rating],
      0,
    );

    const voteWeight =
      (totalVoteWeight / contribution.votes.length + totalVoteWeight / 10) * 2;
    weights.nodeWeights.set(contributionNodeAddress, voteWeight);

    // Add edge to author of the contribution
    graph.addEdge({
      address: getEdgeAddress(
        EdgeNames.Authored,
        contribution.author.eth_address,
        contribution.id,
      ),
      timestampMs: +new Date(contribution.created_at),
      src: getNodeAddressForEthAddress(contribution.author.eth_address),
      dst: contributionNodeAddress,
    });

    // Add edges to each contributor
    for (const participant of contribution.contributors) {
      const contributorEdgeAddress = getEdgeAddress(
        EdgeNames.ContributesTo,
        participant.user.eth_address,
        contribution.id,
      );
      graph.addEdge({
        address: contributorEdgeAddress,
        timestampMs: contributionTimestamp,
        src: getNodeAddressForEthAddress(participant.user.eth_address),
        dst: contributionNodeAddress,
      });
      // Scale weights according to the contribution share
      weights.edgeWeights.set(contributorEdgeAddress, {
        forwards: participant.contribution_share / 16,
        backwards: participant.contribution_share,
      });
    }

    // Add nodes and edges for each vote/rating
    for (const vote of contribution.votes) {
      const ratingNodeAddress = getNodeAddress(
        NodeNames.Rating,
        vote.user.eth_address,
        contribution.id,
      );
      const ratingTimestamp = +new Date(vote.created_at);
      graph.addNode({
        address: ratingNodeAddress,
        description: `a ${vote.rating} rating by ${vote.user.name} `,
        timestampMs: ratingTimestamp,
      });
      // Assign a weight for the rating (used so contributions with more ratings get scored higher)
      weights.nodeWeights.set(
        ratingNodeAddress,
        RATING_WEIGHTS[vote.rating] / 8,
      );

      // Edge from participant to the rating they gave
      graph.addEdge({
        address: getEdgeAddress(
          EdgeNames.GaveRating,
          vote.user.eth_address,
          contribution.id,
        ),
        timestampMs: ratingTimestamp,
        src: getNodeAddressForEthAddress(vote.user.eth_address),
        dst: contributionNodeAddress,
      });

      const contributionRatingEdgeAddress = getEdgeAddress(
        EdgeNames.ContributionRating,
        vote.user.eth_address,
        contribution.id,
      );
      // Edge from rating to the contribution being rated
      graph.addEdge({
        address: contributionRatingEdgeAddress,
        timestampMs: ratingTimestamp,
        src: ratingNodeAddress,
        dst: contributionNodeAddress,
      });
    }
  }

  // weights.nodeWeights.set(getNodeAddress(), 1)

  return sc.core.weightedGraph.toJSON({ graph, weights });
};
