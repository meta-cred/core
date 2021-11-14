import { verifyToken } from '@meta-cred/usewallet';
import { addressToCaip10String } from '@meta-cred/utils';
import { ethers } from 'ethers';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

import { CONFIG } from '@/config';
import { mutation, query, resolved } from '@/gqty';
import { getSelfIdCore } from '@/utils/selfid';

const unauthorizedVariables = {
  'X-Hasura-Role': 'anonymous',
};

const ethersProvider = new ethers.providers.InfuraProvider(1, CONFIG.infuraId);

function getHeaderToken(req: NextApiRequest): string | null {
  const authHeader = req.headers.authorization;
  if (!authHeader) return null;

  if (authHeader.substring(0, 6) !== 'Bearer')
    throw new Error('invalid token type');

  const token = authHeader.replace('Bearer', '').trim();
  if (token.length === 0) return null;
  return token;
}

const getOrCreateUser = async (ethAddress: string) => {
  let user = await resolved(() => {
    const [existingUser] = query.user({
      limit: 1,
      where: { eth_address: { _eq: ethAddress.toLowerCase() } },
    });
    return {
      did: existingUser?.did,
      eth_address: existingUser?.eth_address,
    };
  });

  if (!user.did) {
    // Create user since it doesn't exist yet
    const caip10Address = addressToCaip10String(ethAddress);

    const selfId = getSelfIdCore();

    const did = await selfId.getAccountDID(caip10Address);

    user = await resolved(() => {
      const createdUser = mutation.insert_user_one({
        object: { did, eth_address: ethAddress.toLowerCase() },
      });

      return {
        did: createdUser?.did,
        eth_address: createdUser?.eth_address,
      };
    });
  }

  if (!user.did) {
    throw new Error('Unable to get or create user');
  }

  return user;
};

const handler = nc<NextApiRequest, NextApiResponse>();

handler.get(async (req, res) => {
  let token;
  try {
    token = getHeaderToken(req);
  } catch (_) {
    res.status(401).send('Invalid Auth Header');
    return;
  }

  if (!token) {
    res.json(unauthorizedVariables);
    return;
  }

  const claim = await verifyToken(token, ethersProvider);
  if (!claim) {
    res.status(401).send('Invalid Auth Token');
    return;
  }

  try {
    const user = await getOrCreateUser(claim.iss);

    const hasuraVariables = {
      'X-Hasura-Role': 'user',
      'X-Hasura-User-Id': user.did,
    };

    res.json(hasuraVariables);
  } catch (e) {
    res.status(401).send('Unable to get or create user');
  }
});

export default handler;
