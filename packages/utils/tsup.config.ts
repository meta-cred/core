import type { Options } from 'tsup';

export const tsup: Options = {
  format: ['cjs', 'esm'],
  sourcemap: true,
  minify: true,
  clean: true,
  dts: { resolve: false },
  entryPoints: ['src/*'],
};
