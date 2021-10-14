import { hoursToMilliseconds, minutesToMilliseconds } from 'date-fns';
import { advanceBy, advanceTo } from 'jest-date-mock';

import { formatDistanceFromNow } from '../dateHelpers';

describe('dateHelpers', () => {
  beforeEach(() => {
    advanceTo(new Date(2020, 0, 1, 11, 11, 11));
  });

  describe('formatDistanceFromNow', () => {
    it('should return an empty string if date given is falsy', () => {
      expect(formatDistanceFromNow(null)).toBe('');
      expect(formatDistanceFromNow(undefined)).toBe('');
      expect(formatDistanceFromNow('')).toBe('');
    });

    it('should accept string and number dates', () => {
      expect(formatDistanceFromNow('2020-01-01')).toMatchInlineSnapshot(
        `"11 hours ago"`,
      );
      expect(formatDistanceFromNow(1577836800000)).toMatchInlineSnapshot(
        `"11 hours ago"`,
      );
    });

    it('should return how many minutes ago the given time is', () => {
      const before = Date.now();

      advanceBy(minutesToMilliseconds(10));
      expect(formatDistanceFromNow(before)).toBe(`10 minutes ago`);
    });

    it('should return how many hours ago the given time is', () => {
      const before = Date.now();

      advanceBy(hoursToMilliseconds(2));
      expect(formatDistanceFromNow(before)).toBe(`2 hours ago`);
    });

    it('should return how many days ago the given time is if less than 3 days ago', () => {
      const before = Date.now();

      advanceBy(hoursToMilliseconds(24) * 3 - 1);
      expect(formatDistanceFromNow(before)).toBe(`3 days ago`);
    });

    it('should return the date if the given time is more than 3 days ago', () => {
      const before = Date.now();

      advanceBy(hoursToMilliseconds(24) * 3);
      expect(formatDistanceFromNow(before)).toBe(`on Jan 1, 2020`);
    });
  });
});
