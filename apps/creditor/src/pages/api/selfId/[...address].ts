import type { Account } from '@datamodels/identity-accounts-web';
import type { BasicProfile } from '@datamodels/identity-profile-basic';
import { formatCeramicId, resolveIfEnsName } from '@meta-cred/utils';
import { getLegacy3BoxProfileAsBasicProfile } from '@self.id/3box-legacy';
import type { NextApiHandler } from 'next';

import { defaultMainnetProvider } from '@/utils/defaultProvider';
import { getSelfIdCore } from '@/utils/selfid';

const core = getSelfIdCore();

export type SelfIdAccountsResult = Account[] | null;
export type SelfIdProfileResult = BasicProfile | null;
export type SelfIdResult = {
  accounts: SelfIdAccountsResult;
  profile: SelfIdProfileResult;
};

const getAccounts = async (did: string): Promise<Account[] | null> => {
  try {
    const accountsRes = await core.get<'alsoKnownAs'>('alsoKnownAs', did);
    return accountsRes?.accounts || null;
  } catch (e) {
    console.log(`Unable to fetch accounts from SelfID for did: ${did}`);
    return null;
  }
};

const getProfile = async (
  did: string,
  address?: string | null,
): Promise<BasicProfile | null> => {
  let profile: BasicProfile | null = null;

  try {
    profile = await core.get<'basicProfile'>('basicProfile', did);
  } catch (e) {
    console.log(`Unable to fetch basic profile from SelfID for did: ${did}`);
  }

  if (!profile && address) {
    try {
      profile = await getLegacy3BoxProfileAsBasicProfile(address);
    } catch (e) {
      console.log(`Unable to fetch legacy 3box for address: ${address}`);
    }
  }

  return profile;
};

const handler: NextApiHandler<
  SelfIdResult | SelfIdAccountsResult | SelfIdProfileResult
> = async (req, res) => {
  const [address, field] = req.query.address;

  let resolvedAddress;

  try {
    resolvedAddress = await resolveIfEnsName(address, defaultMainnetProvider);
  } catch (e) {
    res.status(404);
    return;
  }

  const id = formatCeramicId(resolvedAddress);
  if (!id) {
    res.status(404);
    return;
  }

  if (field === 'accounts') {
    const accounts = await getAccounts(id);
    res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate');
    res.status(200).json(accounts);
    return;
  }

  if (field === 'profile') {
    const profile = await getProfile(id, resolvedAddress);
    res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate');
    res.status(200).json(profile);
    return;
  }

  if (!field) {
    const [profile, accounts] = await Promise.all([
      getProfile(id, address),
      getAccounts(id),
    ]);

    res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate');
    res.status(200).json({ accounts, profile });
  }
};

export default handler;
