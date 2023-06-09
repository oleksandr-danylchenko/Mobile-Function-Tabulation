import * as path from 'path';

import { ValidateEnv } from '@julr/vite-plugin-validate-env';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { comlink } from 'vite-plugin-comlink';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      plugins: [['@swc/plugin-emotion', { sourceMap: true }]],
    }),
    comlink(),
    ValidateEnv({}),
  ],
  worker: {
    plugins: [comlink()],
  },
  build: {},
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
