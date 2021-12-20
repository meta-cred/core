import {
  EdgeType,
  NodeType,
  PluginDeclaration,
  sourcecred as sc,
} from 'sourcecred';

export enum NodeNames {
  Contribution = 'CONTRIBUTION',
  Participant = 'PARTICIPANT',
  Rating = 'RATING',
}

export enum EdgeNames {
  ContributesTo = 'CONTRIBUTES_TO',
  Authored = 'AUTHORED',
  ContributionRating = 'CONTRIBUTION_RATING',
  GaveRating = 'GAVE_RATING',
}

const nodePrefix = sc.core.graph.NodeAddress.fromParts([
  'metacred',
  'creditor',
]);
const edgePrefix = sc.core.graph.EdgeAddress.fromParts([
  'metacred',
  'creditor',
]);

export const getNodeAddress = (...parts: string[]): string =>
  sc.core.graph.NodeAddress.append(nodePrefix, ...parts);

export const getEdgeAddress = (...parts: string[]): string =>
  sc.core.graph.EdgeAddress.append(edgePrefix, ...parts);

export const getDeclaration = (): PluginDeclaration => {
  const contributionNodeType: NodeType = {
    name: 'Contribution',
    pluralName: 'Contributions',
    prefix: getNodeAddress(NodeNames.Contribution),
    defaultWeight: 0,
    description: 'A contribution',
  };

  const ratingNodeType: NodeType = {
    name: 'Rating',
    pluralName: 'Ratings',
    prefix: getNodeAddress(NodeNames.Rating),
    defaultWeight: 0,
    description: 'A rating given to a contribution',
  };

  const contributesEdgeType: EdgeType = {
    forwardName: 'contributed to',
    backwardName: 'has contribution from',
    defaultWeight: { forwards: 1 / 16, backwards: 1 },
    prefix: getEdgeAddress(EdgeNames.ContributesTo),
    description: 'Connects a participant to a contribution they made',
  };

  const ratingForContributionEdgeType: EdgeType = {
    forwardName: 'rating given to',
    backwardName: 'received rating',
    defaultWeight: { forwards: 1, backwards: 1 / 16 },
    prefix: getEdgeAddress(EdgeNames.ContributionRating),
    description: 'Connects a rating to a contribution',
  };

  const gaveRatingEdgeType: EdgeType = {
    forwardName: 'gave rating',
    backwardName: 'rating given by',
    defaultWeight: { forwards: 1 / 16, backwards: 0 },
    prefix: getEdgeAddress(EdgeNames.GaveRating),
    description: 'Connects a participant to a rating they gave',
  };

  const authoredEdgeType: EdgeType = {
    forwardName: 'authored',
    backwardName: 'was authored by',
    defaultWeight: { forwards: 1 / 16, backwards: 1 / 16 },
    prefix: getEdgeAddress(EdgeNames.Authored),
    description:
      'Connects a participant to a contribution they recorded / authored',
  };

  return {
    name: 'Creditor Plugin',
    nodePrefix,
    nodeTypes: [contributionNodeType, ratingNodeType],
    edgePrefix,
    edgeTypes: [
      contributesEdgeType,
      ratingForContributionEdgeType,
      gaveRatingEdgeType,
      authoredEdgeType,
    ],
    userTypes: [],
  };
};
