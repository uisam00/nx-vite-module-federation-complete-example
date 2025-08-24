import { makeModuleInstance } from './moduleLoader';
import { MODULES_CONFIG } from './module.config'

const Module1 = makeModuleInstance('Module1', MODULES_CONFIG.Module1);
const Module2 = makeModuleInstance('Module2', MODULES_CONFIG.Module2);

export { Module1, Module2 }
