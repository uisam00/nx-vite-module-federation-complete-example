import React from 'react';
import { RemoteFallBack } from '../ui/src';
import { lazy } from 'react';
import { ModuleConfig } from './module.config';
import { initRemoteDynamically } from '../utils/initRemoteDynamically';
import { loadRemote } from '@module-federation/enhanced/runtime';

// TIP: comment out to use nx library for development
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

function loadFederationRemote(remoteName: 'Module1' | 'Module2',remoteEntry: string) {
  return lazy(async () => {
    try {
      initRemoteDynamically(remoteName, remoteEntry);
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

export const makeModuleInstance = (remoteName: 'Module1' | 'Module2', config:ModuleConfig) => {
  if (config.isRemote) {
    return loadFederationRemote(remoteName, config.remoteEntry!);
  }
  return getLibrary(remoteName, config.localEntry);
};

