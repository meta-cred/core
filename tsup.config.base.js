module.exports = {
  format: ['cjs', 'esm'],
  sourcemap: true,
  minify: true,
  clean: true,
  dts: { resolve: false },
  entryPoints: ['src/*'],
  external: ['**/*.spec.ts', '**/*.test.ts'],
};
