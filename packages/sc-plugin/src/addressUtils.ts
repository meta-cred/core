import { IdentityProposal, NodeAddressT, sourcecred as sc } from 'sourcecred';

const { utils } = sc.plugins.ethereum;

export const getNodeAddressForEthAddress = (
  ethAddress: string,
): NodeAddressT => {
  const address = utils.address.parseAddress(ethAddress);
  return utils.address.nodeAddressForEthAddress(address);
};

export const getIdentityForEthAddress = (
  ethAddress: string,
): IdentityProposal => {
  const address = utils.address.parseAddress(ethAddress);
  return utils.identity.createIdentity(address);
};
