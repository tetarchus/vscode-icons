import { defineConfig } from 'tsup';

const tsupConfig = defineConfig({
  clean: true,
  entry: ['src/extension.ts'],
  format: 'esm',
  outDir: 'out',
  sourcemap: true,
});

export default tsupConfig;
