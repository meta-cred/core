import { providers } from 'ethers';
import { Base64 } from 'js-base64';
import { nanoid } from 'nanoid';

import { requestSignature, verifySignature } from './signature';

const tokenDuration = 1000 * 60 * 60 * 24 * 7; // 7 days

type Claim = {
  iat: Date;
  exp: Date;
  iss: string;
  aud: string;
  tid: string;
};

const MESSAGE =
  'Please sign this message with your wallet to authenticate.\n\n';

export async function createToken(
  provider: providers.Web3Provider,
): Promise<string> {
  const signer = provider.getSigner();
  const address = await signer.getAddress();

  const iat = +new Date();

  const claim = {
    iat,
    exp: iat + tokenDuration,
    iss: address,
    aud: 'meta-cred',
    tid: nanoid(),
  };

  const serializedClaim = JSON.stringify(claim);
  const signInMessage = `${MESSAGE}${serializedClaim}`;
  const proof = await requestSignature(provider, signInMessage);

  return Base64.encode(JSON.stringify([proof, signInMessage]));
}

export async function verifyToken(
  token: string,
  provider: providers.JsonRpcProvider,
): Promise<Claim | null> {
  try {
    const rawToken = Base64.decode(token);
    const [proof, rawClaim] = JSON.parse(rawToken) as [string, string];

    const claim = JSON.parse(rawClaim.replace(MESSAGE, '')) as Claim;
    const address = claim.iss;

    const valid = await verifySignature(address, rawClaim, proof, provider);
    if (!valid) {
      throw new Error('invalid signature');
    }
    return claim;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Token verification failed', e);
    return null;
  }
}
