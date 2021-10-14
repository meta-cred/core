import { shortenIfAddress } from '../address';

describe('shortenIfAddress', () => {
  const testAddress = '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B';

  it('should return an empty string if given address is falsy', () => {
    expect(shortenIfAddress('')).toBe('');
    expect(shortenIfAddress(null)).toBe('');
    expect(shortenIfAddress(undefined)).toBe('');
  });

  it('should shorten the given Ethereum address', () => {
    expect(shortenIfAddress(testAddress)).toBe('0xAb58...eC9B');
    expect(shortenIfAddress(testAddress.toLowerCase())).toBe('0xAb58...eC9B');
  });

  it('should throw error if given address is not valid', () => {
    const invalidAddress = '0xFb5801a7D398351b8bE11C439e05C5B3259aeC9B';

    expect(() => {
      shortenIfAddress(`${testAddress}1`);
    }).toThrowErrorMatchingInlineSnapshot(
      `"Invalid input, address can't be parsed"`,
    );
    expect(() => {
      shortenIfAddress(invalidAddress);
    }).toThrowErrorMatchingInlineSnapshot(
      `"Invalid input, address can't be parsed"`,
    );
    expect(() => {
      shortenIfAddress('foo');
    }).toThrowErrorMatchingInlineSnapshot(
      `"Invalid input, address can't be parsed"`,
    );
  });
});
