import { useContext } from 'react';

import { CeramicContext, ICeramicContext } from './CeramicProvider';

export const useCeramic = (): ICeramicContext => useContext(CeramicContext);
