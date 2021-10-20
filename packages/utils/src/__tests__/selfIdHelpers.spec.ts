import {
  getIpfsUrl,
  getSelfIdImageUrl,
  getSelfIdProfileLink,
} from '../selfIdHelpers';

describe('selfIdHelpers', () => {
  const customEndpoint = 'https://gateway.pinata.cloud';
  const testIpfsHash = 'ipfs://12345abcde';

  describe('getIpfsUrl', () => {
    it('should return a URL for given ipfs hash', () => {
      expect(getIpfsUrl(testIpfsHash)).toMatchInlineSnapshot(
        `"https://gateway.ipfs.io/ipfs/12345abcde"`,
      );
    });

    it('should return a URL with custom endpoint', () => {
      expect(getIpfsUrl(testIpfsHash, customEndpoint)).toBe(
        `${customEndpoint}/ipfs/12345abcde`,
      );
    });
  });

  describe('getSelfIdImageUrl', () => {
    const testImgSource = {
      original: {
        src: testIpfsHash,
        mimeType: 'image/png',
        width: 50,
        height: 50,
      },
    };

    it('should return an empty string if given image source is invalid', () => {
      expect(getSelfIdImageUrl(undefined)).toBe('');
      // @ts-expect-error Testing invalid data from network
      expect(getSelfIdImageUrl({ original: {} })).toBe('');
    });

    it('should return an IPFS url for the given image source', () => {
      expect(getSelfIdImageUrl(testImgSource)).toMatchInlineSnapshot(
        `"https://gateway.ipfs.io/ipfs/12345abcde"`,
      );
    });

    it('should return an IPFS url with custom endpoint', () => {
      expect(getSelfIdImageUrl(testImgSource, customEndpoint)).toBe(
        `${customEndpoint}/ipfs/12345abcde`,
      );
    });
  });

  describe('getSelfIdProfileLink', () => {
    it('should return self.id URL for given DID', () => {
      const did = '123456';
      expect(getSelfIdProfileLink(did)).toBe(`https://self.id/${did}`);
    });
  });
});
