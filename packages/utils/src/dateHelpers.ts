import { differenceInDays, format, formatDistance } from 'date-fns';

import { Maybe } from './typeUtils';

export const formatDistanceFromNow = (
  date: Maybe<Date | number | string>,
): string => {
  if (!date) return '';
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();

  const diff = Math.abs(differenceInDays(d, now));

  if (diff > 7) return `on ${format(d, 'MMM d, y')}`;

  return formatDistance(d, now, { addSuffix: true });
};
