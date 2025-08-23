import { Section1 as Section1Local, Section2 as Section2Local } from './moduleLoader'
import { Section1 as Section1Federation, Section2 as Section2Federation } from './moduleLoader.federation'

const Section1 =
  import.meta.env.VITE_MODULE_FEDERATION_ENABLED === 'true'
    ? Section1Federation
    : Section1Local

const Section2 =
  import.meta.env.VITE_MODULE_FEDERATION_ENABLED === 'true'
    ? Section2Federation
    : Section2Local

export { Section1, Section2 }
