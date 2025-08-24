/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MODULE1_IS_REMOTE: string
  readonly VITE_MODULE1_REMOTE_NAME: string
  readonly VITE_MODULE1_REMOTE_ENTRY: string
  readonly VITE_MODULE2_IS_REMOTE: string
  readonly VITE_MODULE2_REMOTE_NAME: string
  readonly VITE_MODULE2_REMOTE_ENTRY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
