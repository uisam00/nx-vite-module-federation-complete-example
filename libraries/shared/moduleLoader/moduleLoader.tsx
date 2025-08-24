import React from 'react';
import { RemoteFallBack } from '../ui/src';
import { lazy } from 'react';

// TIPS: comment out to use nx library for development
function getLibrary(remoteName: 'Module1' | 'Module2', entry: () => Promise<any>) {
  return lazy(async () => {
    try {
      return await entry();
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
const Module1 = getLibrary('Module1',
  async () => await import('@nx-vite-module-federation-complete-example/module-1')
);
const Module2 = getLibrary('Module2',
  async () => await import('@nx-vite-module-federation-complete-example/module-2')
);

export { Module1, Module2 };
