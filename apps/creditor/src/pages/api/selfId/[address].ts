import type { Account } from '@datamodels/identity-accounts-web';
import type { BasicProfile } from '@datamodels/identity-profile-basic';
import { formatCeramicId } from '@meta-cred/utils';
import { getLegacy3BoxProfileAsBasicProfile } from '@self.id/3box-legacy';
import type { NextApiHandler } from 'next';

import { getSelfIdCore } from '@/utils/selfid';

const core = getSelfIdCore();

export type SelfIdApiResult = {
  accounts: Account[] | null;
  profile: BasicProfile | null;
};

const handler: NextApiHandler<SelfIdApiResult> = async (req, res) => {
  const address = req.query.address as string;

  const id = formatCeramicId(address);
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
    console.log(`Unable to fetch accounts from SelfID for address: ${address}`);
  }

  let profile: BasicProfile | null = null;
  try {
    profile = await core.get<'basicProfile'>('basicProfile', id);
  } catch (e) {
    console.log(
      `Unable to fetch basic profile from SelfID for address: ${address}`,
    );
  }
  if (!profile) {
    try {
      profile = await getLegacy3BoxProfileAsBasicProfile(address);
    } catch (e) {
      console.log(`Unable to fetch legacy 3box for address: ${address}`);
    }
  }

  if (!accounts && !profile) {
    res.status(404);
    return;
  }

  res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate');
  res.status(200).json({ accounts, profile });
};

export default handler;
