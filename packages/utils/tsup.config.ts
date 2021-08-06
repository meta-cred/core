import type { Options } from 'tsup';

export const tsup: Options = {
  format: ['cjs', 'esm'],
  sourcemap: true,
  minify: true,
  splitting: false,
  dts: { resolve: true },
  entryPoints: ['src/*'],
};
