import { lookupEnsAddress } from '@meta-cred/utils';
import { NextApiHandler } from 'next';

import { defaultMainnetProvider } from '@/utils/defaultProvider';

const handler: NextApiHandler<string | null> = async (req, res) => {
  const address = req.query.address as string;

  try {
    const resolvedName = await lookupEnsAddress(
      address,
      defaultMainnetProvider,
    );
    res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate');
    res.status(200).send(resolvedName);
    return;
  } catch (e) {
    res.status(500).end();
  }
};

export default handler;
