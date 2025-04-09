/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
/// <reference types='vitest' />
import dts from 'vite-plugin-dts';
import * as path from 'path';
import { federation } from '@module-federation/vite';
import topLevelAwait from 'vite-plugin-top-level-await';
import {
  ModuleFederationConfig,
  OptimizeDepsConfig,
} from './federation.config';

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

  // Use the predefined dependency optimization settings from OptimizeDepsConfig.
  ...(process.env.VITE_MODULE_FEDERATION_ENABLED === 'true' && {
    optimizeDeps: OptimizeDepsConfig,
  }),

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

    ...(process.env.VITE_MODULE_FEDERATION_ENABLED === 'true'
      ? [
          // Configures Module Federation using the specified configuration.
          // This enables module sharing between the host and remote applications.
          federation(ModuleFederationConfig),

          // Enables top-level await support in modules.
          // - promiseExportName: Sets the export name for the top-level await promise in each chunk.
          // - promiseImportName: Generates unique import names for these promises.
          topLevelAwait(),
        ]
      : []),
  ],

  build: {
    outDir: '../../dist/apps/single-page-app',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}));
