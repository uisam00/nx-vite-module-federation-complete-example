export type Modules = 'Module1' | 'Module2';

export type ModuleConfig = {
  isRemote: boolean;
  remoteName?: string;
  remoteEntry?: string;
  localEntry: () => Promise<any>;
};

export const MODULES_CONFIG: Record<Modules, ModuleConfig> = {
  Module1: {
    isRemote: import.meta.env.VITE_MODULE1_IS_REMOTE === 'true',
    remoteName: import.meta.env.VITE_MODULE1_REMOTE_NAME,
    remoteEntry: import.meta.env.VITE_MODULE1_REMOTE_ENTRY,
    localEntry: async () => await import('@nx-vite-module-federation-complete-example/module-1'),
  },
  Module2: {
    isRemote: import.meta.env.VITE_MODULE2_IS_REMOTE === 'true',
    remoteName: import.meta.env.VITE_MODULE2_REMOTE_NAME,
    remoteEntry: import.meta.env.VITE_MODULE2_REMOTE_ENTRY,
    localEntry: async () => await import('@nx-vite-module-federation-complete-example/module-2'),
  },
};
