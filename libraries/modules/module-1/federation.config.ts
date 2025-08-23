// Import type definitions for Module Federation and Vite's dependency optimization.
import { ModuleFederationOptions } from '@module-federation/vite/lib/utils/normalizeModuleFederationOptions';
import { DepOptimizationOptions } from 'vite';

/**
 * ModuleFederationConfig
 * -----------------------
 * This configuration sets up Module Federation for the remote container named
 * 'Innovation'. It defines how modules are shared between different builds
 * (host and remote) to ensure consistency and prevent duplicate library instances.
 */
export const ModuleFederationConfig: ModuleFederationOptions = {
  // Unique name for the remote container.
  name: 'Module1',

  // Enables generation of a manifest file for runtime module discovery.
  filename: 'module-1-entry.js',
  manifest: true, // Enables manifest generation for runtime discovery. // Unique name for the remote container.

  exposes: {
    // Expose the component at './src/index.ts'
    // under the public name './Module1Remote'.
    // to be able to import this component we must declare an alias in tsconfig.base.json like: 'Module1/Module1Remote'
    './Module1Remote': './src/index.ts',
  },

  remotes: {
    SinglePageApp: {
      entry: 'http://localhost:4200/single-page-app/single-page-app-entry.js',
      name: 'SinglePageApp',
      type: 'module',
    },
  },

  // Shared dependencies configuration.
  // Each dependency is marked as a singleton to ensure only one instance is loaded
  // across both the host and remote, preventing version conflicts and duplication.
  shared: {
    react: {
      singleton: true,
      name: 'react',
    },
    'react/jsx-runtime': {
      singleton: true,
      name: 'react/jsx-runtime',
    },
    'react-dom': {
      singleton: true,
      name: 'react-dom',
    },
    zustand: {
      singleton: true,
      name: 'zustand',
    },
    '@emotion/react': {
      singleton: true,
      name: '@emotion/react',
    },
    '@emotion/styled': {
      singleton: true,
      name: '@emotion/styled',
    },
    'react-router-dom': {
      singleton: true,
      name: 'react-router-dom',
    },
    '@mui/material': {
      singleton: true,
      name: '@mui/material',
    },
  },
};

/**
 * OptimizeDepsConfig
 * -------------------
 * This configuration is used by Vite to optimize dependencies during development.
 * The "needsInterop" array lists modules that require interoperability handling,
 * typically due to differences in module formats (e.g., CommonJS vs. ES Modules).
 */
export const OptimizeDepsConfig: DepOptimizationOptions = {
  needsInterop: [
    '@mui/material',
    'react/jsx-runtime',
    'react',
    'react-dom',
    '@emotion/react',
    '@emotion/styled',
    'react-router-dom',
    'zustand',
  ],
};
