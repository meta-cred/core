import type { Options } from 'tsup';
import tsupBase from '../../tsup.config.base';

export const tsup: Options = {
  ...(tsupBase as Options),
};
