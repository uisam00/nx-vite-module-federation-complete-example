import { Module1 as Module1Local, Module2 as Module2Local } from './moduleLoader'
import { Module1 as Module1Federation, Module2 as Module2Federation } from './moduleLoader.federation'

const Module1 =
  import.meta.env.VITE_MODULE_FEDERATION_ENABLED === 'true'
    ? Module1Federation
    : Module1Local

const Module2 =
  import.meta.env.VITE_MODULE_FEDERATION_ENABLED === 'true'
    ? Module2Federation
    : Module2Local

export { Module1, Module2 }
