import { RemoteFallBack } from '../ui/src';
import { loadRemote } from '@module-federation/enhanced/runtime';
import React from 'react';
import { lazy } from 'react';
import { initRemoteDynamically } from '../utils/initRemoteDynamically';

// TIPS: initializing remotes statically  at runtime
// init({
//   name: 'SinglePageApp',
//   remotes: [
//     {
//       // this is the address of preview of section 1 ** after federation build **
//       entry: 'http://localhost:4301/module-1-entry.js',
//       name: 'Module1',
//       type: 'module',
//     },
//   ],
// });

// TIPS: load remotes at runtime
function loadFederationRemote(remoteName: 'Module1' | 'Module2', entry: string) {
  return lazy(async () => {
    try {
      initRemoteDynamically(remoteName, entry);
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
const Module1 = loadFederationRemote('Module1', 'http://localhost:4301/module-1-entry.js');
const Module2 = loadFederationRemote('Module2', 'http://localhost:4202/module-2-entry.js');

/* ------------------------------------------------------------------------------------ */

export { Module1, Module2 };
