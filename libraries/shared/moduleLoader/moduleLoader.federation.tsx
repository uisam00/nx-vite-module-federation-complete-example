import { RemoteFallBack } from '../ui/src';
import {
  init,
  loadRemote,
  registerRemotes,
} from '@module-federation/enhanced/runtime';
import React from 'react';
import { lazy } from 'react';

// TIPS: initializing remotes statically  at runtime
init({
  name: 'SinglePageApp',
  remotes: [
    {
      entry: 'http://127.0.0.1:8084/innovation-ecosystem-entry.js',
      name: 'Section1',
      type: 'module',
    },
  ],
});

// TIPS: initializing remotes dynamically  at runtime
export function initRemoteDynamically(
  remoteName: 'Section1' | 'Section2',
  entryUrl: string
) {
  registerRemotes([
    {
      entry: entryUrl,
      name: remoteName,
      type: 'module',
    },
  ]);
}

// TIPS: load remotes at runtime
function loadFederationRemote(remoteName: 'Section1' | 'Section2') {
  return lazy(async () => {
    try {
      return (await loadRemote(`${remoteName}/${remoteName}Remote`)) as {
        default: any;
      };
    } catch (error) {
      console.error(error);
      return {
        default: (props) => (
          <RemoteFallBack {...props} remoteName={remoteName} />
        ),
      };
    }
  });
}

// TIPS: return needed remotes
const Section1 = loadFederationRemote('Section1');
const Section2 = loadFederationRemote('Section2');

/* ------------------------------------------------------------------------------------ */

export { Section1, Section2 };
