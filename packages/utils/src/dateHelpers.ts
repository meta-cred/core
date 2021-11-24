import { differenceInDays, format, formatDistanceStrict } from 'date-fns';

import { Maybe } from './typeUtils';

export const formatDistanceFromNow = (
  date: Maybe<Date | number | string>,
): string => {
  if (!date) return '';
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date(Date.now());

  const diff = Math.abs(differenceInDays(d, now));

  if (diff >= 14) return `on ${format(d, 'MMM d, y')}`;

  return formatDistanceStrict(d, now, { addSuffix: true });
};
