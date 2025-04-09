import React from 'react';
import { RemoteFallBack } from '../ui/src';
import { lazy } from 'react';

// TIPS: comment out to use nx library for development
function getLibrary(remoteName: 'Section1' | 'Section2') {
  return lazy(async () => {
    try {
      switch (remoteName) {
        case 'Section1':
          return await import(
            '@nx-vite-module-federation-complete-example/section-1'
          );
        case 'Section2':
          return await import(
            '@nx-vite-module-federation-complete-example/section-2'
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
const Section1 = getLibrary('Section1');
const Section2 = getLibrary('Section2');

export { Section1, Section2 };
