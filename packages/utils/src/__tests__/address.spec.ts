import { shortenAddress, shortenIfAddress } from '../address';

describe('address', () => {
  const testAddress = '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B';

  describe('shortenIfAddress', () => {
    it('should return an empty string if given address is falsy', () => {
      expect(shortenIfAddress('')).toBe('');
      expect(shortenIfAddress(null)).toBe('');
      expect(shortenIfAddress(undefined)).toBe('');
    });

    it('should shorten the given Ethereum address', () => {
      expect(shortenIfAddress(testAddress)).toBe('0xAb58...eC9B');
      expect(shortenIfAddress(testAddress.toLowerCase())).toBe('0xAb58...eC9B');
    });

    it('should return the string unchanged if not given a valid address', () => {
      expect(shortenIfAddress('foo.eth')).toBe('foo.eth');
      expect(shortenIfAddress(`${testAddress}1`)).toBe(`${testAddress}1`);
    });
  });

  describe('shortenAddress', () => {
    it('should throw error if given address is not valid', () => {
      const invalidAddress = '0xFb5801a7D398351b8bE11C439e05C5B3259aeC9B';

      expect(() => {
        shortenAddress(`${testAddress}1`);
      }).toThrowErrorMatchingInlineSnapshot(
        `"Invalid input, address can't be parsed"`,
      );
      expect(() => {
        shortenAddress(invalidAddress);
      }).toThrowErrorMatchingInlineSnapshot(
        `"Invalid input, address can't be parsed"`,
      );
      expect(() => {
        shortenAddress('foo');
      }).toThrowErrorMatchingInlineSnapshot(
        `"Invalid input, address can't be parsed"`,
      );
    });
  });
});
