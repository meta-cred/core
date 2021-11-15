import type { Account } from '@datamodels/identity-accounts-web';
import type { BasicProfile } from '@datamodels/identity-profile-basic';
import { CreateApp } from '@graphql-ez/nextjs';
import { EZSchema, ezSchema, gql } from '@graphql-ez/plugin-schema';
import axios from 'axios';

import { CONFIG } from '@/config';
import {
  SelfIdAccountsResult,
  SelfIdProfileResult,
} from '@/pages/api/selfId/[...address]';

const SELFID_API_BASE_URL = CONFIG.appUrl.includes('localhost')
  ? `http://${CONFIG.appUrl}`
  : `https://${CONFIG.appUrl}`;

const schema: EZSchema = {
  typeDefs: gql`
    type Query {
      selfIdProfile(address: String!): SelfIdProfile
      selfIdAccounts(address: String!): [VerifiedAccount]
    }

    type SelfIdProfile {
      name: String
      description: String
      homeLocation: String
      url: String
      emoji: String
      background: ImageSources
      image: ImageSources
      affiliations: [String]
    }

    type ImageMetadata {
      src: String!
      width: Int!
      height: Int!
      mimeType: String!
      size: Int
    }

    type ImageSources {
      original: ImageMetadata!
    }

    type VerifiedAccount {
      id: String!
      host: String
      protocol: String!
      claim: String
      attestations: [Attestation]!
    }

    type Attestation {
      didJwtVc: String
    }
  `,
  resolvers: {
    Query: {
      selfIdProfile: async (
        root,
        { address }: { address: string },
      ): Promise<BasicProfile | null> => {
        try {
          const { data } = await axios.get<SelfIdProfileResult>(
            `${SELFID_API_BASE_URL}/api/selfId/${address}/profile`,
          );

          return data;
        } catch (e) {
          console.log(e);
          return null;
        }
      },
      selfIdAccounts: async (
        root,
        { address }: { address: string },
      ): Promise<Account[] | null> => {
        try {
          const { data } = await axios.get<SelfIdAccountsResult>(
            `${SELFID_API_BASE_URL}/api/selfId/${address}/accounts`,
          );

          return (
            data?.map((a) => ({
              ...a,
              attestations: a.attestations?.map((att) => ({
                didJwtVc: att['did-jwt-vc'],
              })),
            })) || null
          );
        } catch (e) {
          console.log(e);
          return null;
        }
      },
    },
  },
};

const ezApp = CreateApp({
  ez: {
    plugins: [
      ezSchema({
        schema,
      }),
    ],
  },
});

const { apiHandler } = ezApp.buildApp();

export default apiHandler;
