import { IdentityProposal } from 'sourcecred';

import { getIdentityForEthAddress } from './addressUtils';
import { Participant } from './types';

export const createIdentityProposals = (
  participants: Participant[],
): IdentityProposal[] => {
  const result: IdentityProposal[] = [];

  for (const p of participants) {
    result.push(getIdentityForEthAddress(p.eth_address));
  }

  return result;
};
