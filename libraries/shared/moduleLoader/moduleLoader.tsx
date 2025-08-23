import React from 'react';
import { RemoteFallBack } from '../ui/src';
import { lazy } from 'react';

// TIPS: comment out to use nx library for development
function getLibrary(remoteName: 'Module1' | 'Module2') {
  return lazy(async () => {
    try {
      switch (remoteName) {
        case 'Module1':
          return await import(
            '@nx-vite-module-federation-complete-example/module-1'
          );
        case 'Module2':
          return await import(
            '@nx-vite-module-federation-complete-example/module-2'
          );
        default:
          throw new Error(`Unknown remoteName: ${remoteName}`);
      }
    } catch {
      return {
        default: (props: any) => (
          <RemoteFallBack {...props} remoteName={remoteName} />
        ),
      };
    }
  });
}

// TIPS: comment out to use nx library for development
const Module1 = getLibrary('Module1');
const Module2 = getLibrary('Module2');

export { Module1, Module2 };
