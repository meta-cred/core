import { lookupEnsAddress } from '@meta-cred/utils';
import { NextApiHandler } from 'next';

import { defaultMainnetProvider } from '@/utils/defaultProvider';

const handler: NextApiHandler<string> = async (req, res) => {
  const address = req.query.address as string;

  try {
    const resolvedName = await lookupEnsAddress(
      address,
      defaultMainnetProvider,
    );
    res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate');
    if (resolvedName) {
      res.status(200).send(resolvedName);
      return;
    }

    res.status(404).end();
  } catch (e) {
    res.status(500).end();
  }
};

export default handler;
