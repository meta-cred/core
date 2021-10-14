import { getIdxImageUrl, getIdxProfileLink, getIpfsUrl } from '../idxHelpers';

describe('idxHelpers', () => {
  const customEndpoint = 'https://gateway.pinata.cloud';
  const testIpfsHash = 'ipfs://12345abcde';

  describe('getIpfsUrl', () => {
    it('should return a URL for given ipfs hash', () => {
      expect(getIpfsUrl(testIpfsHash)).toMatchInlineSnapshot(
        `"https://ipfs.infura.io/ipfs/12345abcde"`,
      );
    });

    it('should return a URL with custom endpoint', () => {
      expect(getIpfsUrl(testIpfsHash, customEndpoint)).toBe(
        `${customEndpoint}/ipfs/12345abcde`,
      );
    });
  });

  describe('getIdxImageUrl', () => {
    const testImgSource = {
      original: {
        src: testIpfsHash,
        mimeType: 'image/png',
        width: 50,
        height: 50,
      },
    };

    it('should return an empty string if given image source is invalid', () => {
      expect(getIdxImageUrl(undefined)).toBe('');
      // @ts-expect-error Testing invalid data from network
      expect(getIdxImageUrl({ original: {} })).toBe('');
    });

    it('should return an IPFS url for the given image source', () => {
      expect(getIdxImageUrl(testImgSource)).toMatchInlineSnapshot(
        `"https://ipfs.infura.io/ipfs/12345abcde"`,
      );
    });

    it('should return an IPFS url with custom endpoint', () => {
      expect(getIdxImageUrl(testImgSource, customEndpoint)).toBe(
        `${customEndpoint}/ipfs/12345abcde`,
      );
    });
  });

  describe('getIdxProfileLink', () => {
    it('should return self.id URL for given DID', () => {
      const did = '123456';
      expect(getIdxProfileLink(did)).toBe(`https://self.id/${did}`);
    });
  });
});
