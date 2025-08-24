/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

import { federation } from '@module-federation/vite';
import topLevelAwait from 'vite-plugin-top-level-await';
import {
  ModuleFederationConfig,
  OptimizeDepsConfig,
} from './federation.config';

// load environment variables from .env file for federation
let defineEnv: any;
const isRemote = process.env.VITE_MODULE2_IS_REMOTE?.trim() === 'true';

if (isRemote) {
  defineEnv = {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
    'process.env.VITE_MODULE2_IS_REMOTE': JSON.stringify(process.env.VITE_MODULE2_IS_REMOTE),
  };
}

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/libraries/modules/module-2',

  server: {
    port: 4202,
    host: 'localhost',
  },
  preview: {
    port: 4302,
    host: 'localhost',
  },

  // so that remote can get the static resources from its own address and not the host address
  ...(isRemote && { base: './' }),

  ...(isRemote && {
    // Use the predefined dependency optimization settings from OptimizeDepsConfig.
    optimizeDeps: OptimizeDepsConfig,

    // load environment variables from .env file for federation
    define: defineEnv,
  }),

  plugins: [
    react(),

    nxViteTsPaths(),

    // Generates TypeScript declaration files (.d.ts) for the application.
    // - entryRoot: Specifies the root directory for your source files.
    // - tsconfigPath: Points to the TypeScript configuration file for the app (tsconfig.app.json).
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
    }),

    ...(isRemote
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
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: '../../../dist/libraries/modules/module-2',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
      include: [/node_modules/],
      exclude: [/react-dom/],
    },

    // if we where in federation mode we will not use lib mode
    ...(isRemote
      ? {}
      : {
          lib: {
            // Could also be a dictionary or array of multiple entry points.
            entry: 'src/index.ts',
            name: '@modules/module-2',
            fileName: 'index',
            // Change this to the formats you want to support.
            // Don't forget to update your package.json as well.
            formats: ['es' as const],
          },
        }),

    rollupOptions: {
      ...(isRemote
        ? {
            // this config is necessary for build with federation
            input: {
              index: 'index.html',
            },
          }
        : {
            input: {
              index: 'src/index.ts',
            },
            // External packages that should not be bundled into your library.
            external: [
              'react',
              'react-dom',
              'react/jsx-runtime',
              'react-router-dom',
              '@mui/material',
              '@emotion/react',
              '@emotion/styled',
              'zustand'
            ],
          }),
    },
  },
}));
