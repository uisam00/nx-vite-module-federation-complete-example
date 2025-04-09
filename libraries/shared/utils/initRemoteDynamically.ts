// TIPS: initializing remotes dynamically  at runtime
import { registerRemotes } from '@module-federation/enhanced/runtime';

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
