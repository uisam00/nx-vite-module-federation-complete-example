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
if (process.env.VITE_MODULE1_IS_REMOTE === 'true') {
  defineEnv = Object.keys(process.env).reduce((acc, key) => {
    acc[`process.env.${key}`] = JSON.stringify(process.env[key]);
    return acc;
  }, {});
}

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/libraries/modules/module-1',

  server: {
    port: 4201,
    host: 'localhost',
  },
  preview: {
    port: 4301,
    host: 'localhost',
  },

  // so that remote can get the static resources from its own address and not the host address
  ...(process.env.VITE_MODULE1_IS_REMOTE === 'true' && { base: './' }),

  ...(process.env.VITE_MODULE1_IS_REMOTE === 'true' && {
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

    ...(process.env.VITE_MODULE1_IS_REMOTE === 'true'
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
    outDir: '../../../dist/libraries/modules/module-1',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },

    // if we where in federation mode we will not use lib mode
    ...(process.env.VITE_MODULE1_IS_REMOTE === 'true'
      ? {}
      : {
          lib: {
            // Could also be a dictionary or array of multiple entry points.
            entry: 'src/index.ts',
            name: '@nx-vite-module-federation-complete-example/module-1',
            fileName: 'index',
            // Change this to the formats you want to support.
            // Don't forget to update your package.json as well.
            formats: ['es' as const],
          },
        }),

    rollupOptions: {
      ...(process.env.VITE_MODULE1_IS_REMOTE === 'true'
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
            external: ['react', 'react-dom', 'react/jsx-runtime'],
          }),
    },
  },
}));
