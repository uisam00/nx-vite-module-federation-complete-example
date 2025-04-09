/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
/// <reference types='vitest' />
import dts from 'vite-plugin-dts';
import * as path from 'path';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/single-page-app',

  base: '/single-page-app',

  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react(), // Resolves TypeScript path aliases based on your Nx workspace configuration.
    nxViteTsPaths(),

    // Generates TypeScript declaration files (.d.ts) for the application.
    // - entryRoot: Specifies the root directory for your source files.
    // - tsconfigPath: Points to the TypeScript configuration file for the app (tsconfig.app.json).
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.app.json'),
    }),
  ],

  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}));
