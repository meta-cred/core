/* eslint-disable @typescript-eslint/no-explicit-any */
/** Declaration file generated by dts-gen */
declare module 'sourcecred' {
  type Address = string;
  export type NodeAddressT = string;
  export type EdgeAddressT = string;
  type GraphJSON = Record<string, any>;

  declare const sourcecred: {
    sourcecred: {
      api: {
        analysis: {
          analysis: any;
        };
        credrank: {
          credrank: any;
        };
        grain: {
          executeGrainIntegrationsFromGrainInput: any;
          grain: any;
        };
        graph: {
          graph: any;
        };
      };
      core: {
        CredGrainView: CredGrainView;
        address: {
          makeAddressModule: any;
        };
        algorithm: {
          graphToMarkovChain: {
            adjacencySource: any;
            createConnections: any;
            createOrderedSparseMarkovChain: any;
            distributionToNodeDistribution: any;
            normalize: any;
            normalizeNeighbors: any;
            permute: any;
          };
          markovChain: {
            findStationaryDistribution: any;
            sparseMarkovChainAction: any;
            sparseMarkovChainFromTransitionMatrix: any;
          };
        };
        credGraph: {
          CredGraph: any;
          jsonParser: {
            fmap: any;
            parse: any;
            parseOrThrow: any;
          };
          parser: {
            fmap: any;
            parse: any;
            parseOrThrow: any;
          };
        };
        graph: {
          Direction: {
            ANY: any;
            IN: any;
            OUT: any;
          };
          EdgeAddress: {
            append(address: Address, ...parts: string[]): Address;
            assertValid: any;
            assertValidParts: any;
            empty: string;
            fromParts(parts: string[]): Address;
            fromRaw: any;
            hasPrefix: any;
            parser: {
              fmap: any;
              parse: any;
              parseOrThrow: any;
            };
            toParts: any;
            toString: any;
          };
          Graph: typeof SCGraph;
          NodeAddress: {
            append(address: Address, ...parts: string[]): Address;
            assertValid: any;
            assertValidParts: any;
            empty: string;
            fromParts(parts: string[]): Address;
            fromRaw: any;
            hasPrefix: any;
            parser: {
              fmap: any;
              parse: any;
              parseOrThrow: any;
            };
            toParts: any;
            toString: any;
          };
          compareGraphs: any;
          edgeToParts: any;
          edgeToString: any;
          edgeToStrings: any;
          nodeToString: any;
        };
        weightedGraph: {
          empty: any;
          fromJSON: any;
          merge: any;
          overrideWeights: any;
          toJSON: any;
        };
        weights: {
          compareWeights: any;
          copy(w: WeightsT): WeightsT;
          edgeWeightParser: {
            fmap: any;
            parse: any;
            parseOrThrow: any;
          };
          empty(): WeightsT;
          fromJSON: any;
          merge: any;
          parser: {
            fmap: any;
            parse: any;
            parseOrThrow: any;
          };
          toJSON: any;
        };
      };
      instance: {
        LocalInstance: any;
        readInstance: {
          ReadInstance: any;
          getNetworkReadInstance: any;
          getOriginReadInstance: any;
          getRawGithubReadInstance: any;
        };
      };
      ledger: {
        grain: {
          DECIMAL_PRECISION: number;
          ONE: string;
          ZERO: string;
          add: any;
          div: any;
          divideFloat: any;
          eq: any;
          format: any;
          formatAndTrim: any;
          fromApproximateFloat: any;
          fromFloatString: any;
          fromInteger: any;
          fromString: any;
          gt: any;
          gte: any;
          lt: any;
          lte: any;
          mul: any;
          multiplyFloat: any;
          parser: {
            fmap: any;
            parse: any;
            parseOrThrow: any;
          };
          splitBudget: any;
          sub: any;
          sum: any;
          toFloatRatio: any;
          toFloatString: any;
        };
        identity: {
          IDENTITY_PREFIX: string;
          aliasParser: {
            fmap: any;
            parse: any;
            parseOrThrow: any;
          };
          contractions: any;
          delimitedIdentityIdParser: {
            fmap: any;
            parse: any;
            parseOrThrow: any;
          };
          graphNode: any;
          identityIdParser: {
            fmap: any;
            parse: any;
            parseOrThrow: any;
          };
          identityParser: {
            fmap: any;
            parse: any;
            parseOrThrow: any;
          };
          identityTypeParser: {
            fmap: any;
            parse: any;
            parseOrThrow: any;
          };
          nameFromString: any;
          nameParser: {
            fmap: any;
            parse: any;
            parseOrThrow: any;
          };
          newIdentity: any;
        };
        ledger: {
          Ledger: any;
        };
        manager: {
          LedgerManager: any;
        };
        storage: {
          GithubStorage: any;
          WritableGithubStorage: any;
        };
        utils: {
          diffLedger: any;
          distributions: {
            applyDistributions: any;
            computeCredAccounts: any;
            computeDistribution: any;
          };
          ensureIdentityExists: any;
        };
      };
      plugins: {
        ConstructorPlugin: any;
        coerceNameFromString: any;
        declarationParser: {
          fmap: any;
          parse: any;
          parseOrThrow(declaration: Record<string, any>): PluginDeclaration;
        };
        discord: {
          DiscordPlugin: any;
          declaration: {
            addsReactionEdgeType: {
              backwardName: string;
              defaultWeight: {
                backwards: number;
                forwards: number;
              };
              description: string;
              forwardName: string;
              prefix: string;
            };
            authorsMessageEdgeType: {
              backwardName: string;
              defaultWeight: {
                backwards: number;
                forwards: number;
              };
              description: string;
              forwardName: string;
              prefix: string;
            };
            declaration: {
              edgePrefix: string;
              edgeTypes: {
                backwardName: string;
                defaultWeight: {
                  backwards: number;
                  forwards: number;
                };
                description: string;
                forwardName: string;
                prefix: string;
              }[];
              name: string;
              nodePrefix: string;
              nodeTypes: {
                defaultWeight: number;
                description: string;
                name: string;
                pluralName: string;
                prefix: string;
              }[];
              userTypes: {
                defaultWeight: number;
                description: string;
                name: string;
                pluralName: string;
                prefix: string;
              }[];
            };
            edgePrefix: string;
            memberNodeType: {
              defaultWeight: number;
              description: string;
              name: string;
              pluralName: string;
              prefix: string;
            };
            mentionsEdgeType: {
              backwardName: string;
              defaultWeight: {
                backwards: number;
                forwards: number;
              };
              description: string;
              forwardName: string;
              prefix: string;
            };
            messageNodeType: {
              defaultWeight: number;
              description: string;
              name: string;
              pluralName: string;
              prefix: string;
            };
            nodePrefix: string;
            propsEdgeType: {
              backwardName: string;
              defaultWeight: {
                backwards: number;
                forwards: number;
              };
              description: string;
              forwardName: string;
              prefix: string;
            };
            reactionNodeType: {
              defaultWeight: number;
              description: string;
              name: string;
              pluralName: string;
              prefix: string;
            };
            reactsToEdgeType: {
              backwardName: string;
              defaultWeight: {
                backwards: number;
                forwards: number;
              };
              description: string;
              forwardName: string;
              prefix: string;
            };
          };
          utils: {
            identity: {
              createIdentities: any;
              createIdentity: any;
            };
          };
        };
        discourse: {
          DiscoursePlugin: any;
          address: {
            likeAddress: any;
            postAddress: any;
            topicAddress: any;
            userAddress: any;
          };
          declaration: {
            authorsPostEdgeType: {
              backwardName: string;
              defaultWeight: {
                backwards: number;
                forwards: number;
              };
              description: string;
              forwardName: string;
              prefix: string;
            };
            authorsTopicEdgeType: {
              backwardName: string;
              defaultWeight: {
                backwards: number;
                forwards: number;
              };
              description: string;
              forwardName: string;
              prefix: string;
            };
            createsLikeEdgeType: {
              backwardName: string;
              defaultWeight: {
                backwards: number;
                forwards: number;
              };
              description: string;
              forwardName: string;
              prefix: string;
            };
            declaration: {
              edgePrefix: string;
              edgeTypes: {
                backwardName: string;
                defaultWeight: {
                  backwards: number;
                  forwards: number;
                };
                description: string;
                forwardName: string;
                prefix: string;
              }[];
              name: string;
              nodePrefix: string;
              nodeTypes: {
                defaultWeight: number;
                description: string;
                name: string;
                pluralName: string;
                prefix: string;
              }[];
              userTypes: {
                defaultWeight: number;
                description: string;
                name: string;
                pluralName: string;
                prefix: string;
              }[];
            };
            edgePrefix: string;
            likeNodeType: {
              defaultWeight: number;
              description: string;
              name: string;
              pluralName: string;
              prefix: string;
            };
            likesEdgeType: {
              backwardName: string;
              defaultWeight: {
                backwards: number;
                forwards: number;
              };
              description: string;
              forwardName: string;
              prefix: string;
            };
            nodePrefix: string;
            postNodeType: {
              defaultWeight: number;
              description: string;
              name: string;
              pluralName: string;
              prefix: string;
            };
            postRepliesEdgeType: {
              backwardName: string;
              defaultWeight: {
                backwards: number;
                forwards: number;
              };
              description: string;
              forwardName: string;
              prefix: string;
            };
            referencesPostEdgeType: {
              backwardName: string;
              defaultWeight: {
                backwards: number;
                forwards: number;
              };
              description: string;
              forwardName: string;
              prefix: string;
            };
            referencesTopicEdgeType: {
              backwardName: string;
              defaultWeight: {
                backwards: number;
                forwards: number;
              };
              description: string;
              forwardName: string;
              prefix: string;
            };
            referencesUserEdgeType: {
              backwardName: string;
              defaultWeight: {
                backwards: number;
                forwards: number;
              };
              description: string;
              forwardName: string;
              prefix: string;
            };
            topicContainsPostEdgeType: {
              backwardName: string;
              defaultWeight: {
                backwards: number;
                forwards: number;
              };
              description: string;
              forwardName: string;
              prefix: string;
            };
            topicHasLikedPostEdgeType: {
              backwardName: string;
              defaultWeight: {
                backwards: number;
                forwards: number;
              };
              description: string;
              forwardName: string;
              prefix: string;
            };
            topicNodeType: {
              defaultWeight: number;
              description: string;
              name: string;
              pluralName: string;
              prefix: string;
            };
            userNodeType: {
              defaultWeight: number;
              description: string;
              name: string;
              pluralName: string;
              prefix: string;
            };
          };
        };
        ethereum: {
          declaration: {
            declaration: {
              edgePrefix: string;
              edgeTypes: any[];
              name: string;
              nodePrefix: string;
              nodeTypes: {
                defaultWeight: number;
                description: string;
                name: string;
                pluralName: string;
                prefix: string;
              }[];
              userTypes: {
                defaultWeight: number;
                description: string;
                name: string;
                pluralName: string;
                prefix: string;
              }[];
            };
            edgePrefix: string;
            ethAddressEntryType: {
              defaultWeight: number;
              description: string;
              name: string;
              pluralName: string;
              prefix: string;
            };
            nodePrefix: string;
          };
          utils: {
            address: {
              nodeAddressForEthAddress(address: string): NodeAddressT;
              parseAddress(address: string): string;
              truncateEthAddress: any;
            };
            identity: {
              createIdentities: any;
              createIdentity(address: string): IdentityProposal;
            };
          };
        };
        github: {
          GithubPlugin: any;
          declaration: {
            declaration: {
              edgePrefix: string;
              edgeTypes: {
                backwardName: string;
                defaultWeight: {
                  backwards: number;
                  forwards: number;
                };
                description: string;
                forwardName: string;
                prefix: string;
              }[];
              name: string;
              nodePrefix: string;
              nodeTypes: {
                defaultWeight: number;
                description: string;
                name: string;
                pluralName: string;
                prefix: string;
              }[];
              userTypes: {
                defaultWeight: number;
                description: string;
                name: string;
                pluralName: string;
                prefix: string;
              }[];
            };
            repoNodeType: {
              defaultWeight: number;
              description: string;
              name: string;
              pluralName: string;
              prefix: string;
            };
            userNodeType: {
              defaultWeight: number;
              description: string;
              name: string;
              pluralName: string;
              prefix: string;
            };
          };
          edges: {
            AUTHORS_TYPE: string;
            CORRESPONDS_TO_COMMIT_TYPE: string;
            HAS_PARENT_TYPE: string;
            MERGED_AS_TYPE: string;
            Prefix: {
              authors: string;
              base: string;
              correspondsToCommit: string;
              hasParent: string;
              mergedAs: string;
              reacts: string;
              reactsHeart: string;
              reactsHooray: string;
              reactsRocket: string;
              reactsThumbsUp: string;
              references: string;
            };
            REACTS_TYPE: string;
            REFERENCES_TYPE: string;
            createEdge: {
              authors: any;
              correspondsToCommit: any;
              hasParent: any;
              mergedAs: any;
              reacts: any;
              references: any;
            };
            fromRaw: any;
            toRaw: any;
          };
          nodes: {
            BOT_SUBTYPE: string;
            COMMENT_TYPE: string;
            COMMIT_TYPE: string;
            ISSUE_TYPE: string;
            PULL_TYPE: string;
            Prefix: {
              base: string;
              bot: string;
              comment: string;
              commit: string;
              issue: string;
              issueComment: string;
              pull: string;
              pullComment: string;
              repo: string;
              review: string;
              reviewComment: string;
              user: string;
              userlike: string;
            };
            REPO_TYPE: string;
            REVIEW_TYPE: string;
            USERLIKE_TYPE: string;
            USER_SUBTYPE: string;
            fromRaw: any;
            loginAddress: any;
            toRaw: any;
          };
        };
        identityProposalsParser: {
          fmap: any;
          parse: any;
          parseOrThrow: any;
        };
        initiatives: {
          InitiativesPlugin: any;
          declaration: {
            championsEdgeType: {
              backwardName: string;
              defaultWeight: {
                backwards: number;
                forwards: number;
              };
              description: string;
              forwardName: string;
              prefix: string;
            };
            contributesToEdgeType: {
              backwardName: string;
              defaultWeight: {
                backwards: number;
                forwards: number;
              };
              description: string;
              forwardName: string;
              prefix: string;
            };
            contributesToEntryEdgeType: {
              backwardName: string;
              defaultWeight: {
                backwards: number;
                forwards: number;
              };
              description: string;
              forwardName: string;
              prefix: string;
            };
            contributionEntryType: {
              defaultWeight: number;
              description: string;
              name: string;
              pluralName: string;
              prefix: string;
            };
            declaration: {
              edgePrefix: string;
              edgeTypes: {
                backwardName: string;
                defaultWeight: {
                  backwards: number;
                  forwards: number;
                };
                description: string;
                forwardName: string;
                prefix: string;
              }[];
              name: string;
              nodePrefix: string;
              nodeTypes: {
                defaultWeight: number;
                description: string;
                name: string;
                pluralName: string;
                prefix: string;
              }[];
              userTypes: any[];
            };
            dependencyEntryType: {
              defaultWeight: number;
              description: string;
              name: string;
              pluralName: string;
              prefix: string;
            };
            dependsOnEdgeType: {
              backwardName: string;
              defaultWeight: {
                backwards: number;
                forwards: number;
              };
              description: string;
              forwardName: string;
              prefix: string;
            };
            edgePrefix: string;
            initiativeNodeType: {
              defaultWeight: number;
              description: string;
              name: string;
              pluralName: string;
              prefix: string;
            };
            nodeEntryTypes: {
              CONTRIBUTION: {
                defaultWeight: number;
                description: string;
                name: string;
                pluralName: string;
                prefix: string;
              };
              DEPENDENCY: {
                defaultWeight: number;
                description: string;
                name: string;
                pluralName: string;
                prefix: string;
              };
              REFERENCE: {
                defaultWeight: number;
                description: string;
                name: string;
                pluralName: string;
                prefix: string;
              };
            };
            nodePrefix: string;
            referenceEntryType: {
              defaultWeight: number;
              description: string;
              name: string;
              pluralName: string;
              prefix: string;
            };
            referencesEdgeType: {
              backwardName: string;
              defaultWeight: {
                backwards: number;
                forwards: number;
              };
              description: string;
              forwardName: string;
              prefix: string;
            };
          };
        };
      };
    };
  };

  export = sourcecred;

  type NodeWeight = number;

  interface EdgeWeight {
    backwards: number;
    forwards: number;
  }

  export interface SCNode {
    address: NodeAddressT;
    description: string;
    timestampMs: number;
  }
  export interface SCEdge {
    address: EdgeAddressT;
    src: NodeAddressT;
    dst: NodeAddressT;
    timestampMs: number;
  }

  export interface NodeType {
    defaultWeight: number;
    description: string;
    name: string;
    pluralName: string;
    prefix: NodeAddressT;
  }

  export interface EdgeType {
    backwardName: string;
    defaultWeight: EdgeWeight;
    description: string;
    forwardName: string;
    prefix: EdgeAddressT;
  }

  export interface PluginDeclaration {
    edgePrefix: string;
    edgeTypes: EdgeType[];
    name: string;
    nodePrefix: string;
    nodeTypes: NodeType[];
    userTypes: NodeType[];
  }

  export class SCGraph {
    constructor();
    addNode(node: SCNode): this;
    removeNode(a: NodeAddressT): this;
    hasNode(a: NodeAddressT): boolean;
    node(a: NodeAddressT): SCNode | null | undefined;
    addEdge(edge: SCEdge): this;
    removeEdge(a: EdgeAddressT): this;
    hasEdge(a: EdgeAddressT): boolean;
    edge(a: EdgeAddressT): SCEdge | null | undefined;
    toJSON(): GraphJSON;
    static fromJSON(json: GraphJSON): SCGraph;
  }

  export interface WeightsT {
    nodeWeights: Map<NodeAddressT, NodeWeight>;
    edgeWeights: Map<EdgeAddressT, EdgeWeight>;
  }

  export enum IdentityType {
    USER = 'USER',
    PROJECT = 'PROJECT',
    ORGANIZATION = 'ORGANIZATION',
    BOT = 'BOT',
  }

  export interface IdentityProposal {
    name: string;
    pluginName: string;
    alias: {
      description: string;
      address: NodeAddressT;
    };
    type: IdentityType;
  }

  export class CredGrainView {
    constructor(graph: CredGraph, ledger: Ledger);
    participants: () => ParticipantCredGrain[];

    totalCredPerInterval: () => number[];

    totalGrainPerInterval: () => string[];
  }

  export interface ParticipantCredGrain {
    identity: SCIdentity;
    cred: number;
    credPerInterval: number[];
    grainEarned: string;
    grainEarnedPerInterval: string[];
  }

  export interface LedgerManager {
    reloadLedger: () => Promise<ReloadResult>;
    ledger: Ledger;
    persist: () => Promise<ReloadResult>;
  }

  export interface Ledger {
    accounts: () => SCAccountInfo[];
    account: (id: string) => SCAccountInfo;
    accountByAddress: (address: string) => SCAccountInfo;
    addAlias: (identityId: any, alias: any) => void;
    activate: (identityId: any) => void;
  }

  export interface ReloadResult {
    error: string | null;
    localChanges: any;
  }

  export interface SCReadInstance {
    readCredGraph: () => Promise<CredGraph>;
  }

  export type CredGraph = Record<string, unknown>;

  export interface SCAccountsData {
    accounts: SCAccount[];
    intervalEndpoints: number[];
    unclaimedAliases: SCUnclaimedAlias[];
  }

  export interface SCAccount {
    account: SCAccountInfo;
    cred: number[];
    totalCred: number;
  }

  export interface SCAccountInfo {
    active: boolean;
    balance: string;
    identity: SCIdentity;
    paid: string;
  }

  export interface SCIdentity {
    address: string;
    aliases: SCAlias[];
    id: string;
    name: string;
    subtype: 'USER' | 'PROJECT' | 'ORGANIZATION' | 'BOT';
  }

  export interface SCAlias {
    address: string;
    description: string;
  }

  export interface SCUnclaimedAlias {
    alias: SCAlias;
    cred: number[];
    totalCred: number;
  }

  export interface AddressBookEntry {
    name: string;
    createdAt: number;
    address: string;
    discordId: string;
  }
}
