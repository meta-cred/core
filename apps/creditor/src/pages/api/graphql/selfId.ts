import type { Account } from '@datamodels/identity-accounts-web';
import type { BasicProfile } from '@datamodels/identity-profile-basic';
import { CreateApp } from '@graphql-ez/nextjs';
import { EZSchema, ezSchema, gql } from '@graphql-ez/plugin-schema';
import { formatCeramicId } from '@meta-cred/utils';
import { getLegacy3BoxProfileAsBasicProfile } from '@self.id/3box-legacy';

import { getSelfIdCore } from '@/utils/selfid';

const core = getSelfIdCore();

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
        { address },
      ): Promise<BasicProfile | null> => {
        const id = formatCeramicId(address);
        if (!id) return null;

        try {
          return await core.get<'basicProfile'>('basicProfile', id);
        } catch (e) {
          console.log(
            `Unable to fetch basicProfile from SelfID for DID: ${id}. Falling back to 3Box Legacy`,
          );
        }
        try {
          return await getLegacy3BoxProfileAsBasicProfile(address);
        } catch (e) {
          return null;
        }
      },
      selfIdAccounts: async (root, { address }): Promise<Account[] | null> => {
        const id = formatCeramicId(address);
        if (!id) return null;

        try {
          const accounts = await core.get<'alsoKnownAs'>('alsoKnownAs', id);
          return (
            accounts?.accounts.map((a) => ({
              ...a,
              attestations: a.attestations?.map((att) => ({
                didJwtVc: att['did-jwt-vc'],
              })),
            })) || null
          );
        } catch (e) {
          console.log(`Unable to fetch accounts from SelfID for DID: ${id}`);
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
