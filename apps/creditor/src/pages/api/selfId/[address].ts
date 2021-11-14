import type { Account } from '@datamodels/identity-accounts-web';
import type { BasicProfile } from '@datamodels/identity-profile-basic';
import { formatCeramicId } from '@meta-cred/utils';
import type { NextApiHandler } from 'next';

import { getSelfIdCore } from '@/utils/selfid';

const core = getSelfIdCore();

type ReturnType = {
  accounts: Account[] | null;
  profile: BasicProfile | null;
};

const handler: NextApiHandler<ReturnType> = async (req, res) => {
  const { address } = req.query;

  const id = formatCeramicId(address as string);
  if (!id) {
    res.status(404);
    return;
  }

  let accounts: Account[] | null = null;

  try {
    const accountsRes = await core.get<'alsoKnownAs'>('alsoKnownAs', id);
    if (accountsRes?.accounts) {
      accounts = accountsRes.accounts;
    }
  } catch (e) {
    console.log(`Unable to fetch accounts from SelfID for DID: ${id}`);
  }

  let profile: BasicProfile | null = null;
  try {
    profile = await core.get<'basicProfile'>('basicProfile', id);
  } catch (e) {
    console.log(`Unable to fetch basic profile from SelfID for DID: ${id}`);
  }

  if (!accounts && !profile) {
    res.status(404);
    return;
  }

  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');
  res.status(200).json({ accounts, profile });
};

export default handler;
