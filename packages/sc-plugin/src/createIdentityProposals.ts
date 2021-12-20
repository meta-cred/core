import { IdentityProposal, IdentityType, sourcecred as sc } from 'sourcecred';

import { getNodeAddressForEthAddress } from './addressUtils';
import { Participant } from './types';

const { utils } = sc.plugins.ethereum;

export const createIdentityProposals = (
  participants: Participant[],
): IdentityProposal[] => {
  const result: IdentityProposal[] = [];

  for (const p of participants) {
    const alias = {
      description: utils.address.parseAddress(p.eth_address),
      address: getNodeAddressForEthAddress(p.eth_address),
    };
    result.push({
      pluginName: 'creditor',
      name: sc.plugins.coerceNameFromString(p.name),
      type: 'USER' as IdentityType,
      alias,
    });
  }

  return result;
};
