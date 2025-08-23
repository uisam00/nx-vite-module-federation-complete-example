import { RemoteFallBack } from '../ui/src';
import { init, loadRemote } from '@module-federation/enhanced/runtime';
import React from 'react';
import { lazy } from 'react';
import { initRemoteDynamically } from '../utils/initRemoteDynamically';

// TIPS: initializing remotes statically  at runtime
init({
  name: 'SinglePageApp',
  remotes: [
    {
      // this is the address of preview of section 1 ** after federation build **
      entry: 'http://localhost:4301/section-1-entry.js',
      name: 'Section1',
      type: 'module',
    },
  ],
});

// TIPS: load remotes at runtime
function loadFederationRemote(remoteName: 'Section1' | 'Section2') {
  return lazy(async () => {
    try {
      switch (remoteName) {
        case 'Section1':
          // load section 1 statically
          return (await loadRemote(`${remoteName}/${remoteName}Remote`)) as {
            default: any;
          };

        // we are loading section 2 dynamically
        // you can later get the url from api or any other source
        case 'Section2':
          initRemoteDynamically(
            remoteName,
            'http://localhost:4204/section-2-entry.js'
          );
          return (await loadRemote(`${remoteName}/${remoteName}Remote`)) as {
            default: any;
          };
        default:
          throw new Error(`Unknown remoteName: ${remoteName}`);
      }
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
