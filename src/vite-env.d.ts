/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME?: string
  readonly VITE_I18N_DEBBUG?: 'true' | 'false'
  readonly PACKAGE_VERSION: string
  readonly VITE_MARICA_API_BASE_URL: string
  readonly VITE_API_TOKEN: string
  readonly VITE_COMPANY_FACEBOOK: string
  readonly VITE_COMPANY_INSTAGRAM: string
  readonly VITE_COMPANY_TWITTER: string
  readonly VITE_COMPANY_YOUTUBE: string
  readonly VITE_APP_MARICA: string
  // add more env variables here...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
