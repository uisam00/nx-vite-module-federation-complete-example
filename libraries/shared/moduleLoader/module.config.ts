export type Modules = 'Module1' | 'Module2';

export type ModuleConfig = {
  isRemote: boolean;
  remoteName?: string;
  remoteEntry?: string;
  localEntry: () => Promise<any>;
};

export const MODULES_CONFIG: Record<Modules, ModuleConfig> = {
  Module1: {
    isRemote: false,
    localEntry: async () => await import('@nx-vite-module-federation-complete-example/module-1'),
  },
  Module2: {
    isRemote: true,
    localEntry: async () => await import('@nx-vite-module-federation-complete-example/module-2'),
    remoteName: 'Module2',
    remoteEntry: 'http://localhost:4202/module-2-entry.js',
  },
};
