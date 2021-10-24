import { Core } from '@self.id/core';

import { CONFIG } from '../config';

let selfId: Core;

export const getSelfIdCore = (): Core => {
  if (selfId) {
    return selfId;
  }
  selfId = new Core({ ceramic: CONFIG.ceramicEndpoint });
  return selfId;
};
