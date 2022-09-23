const Config = {
  api: {
    base_URL: import.meta.env.VITE_MARICA_API_BASE_URL,
    token: import.meta.env.VITE_API_TOKEN,
  },
  app: {
    name: import.meta.env.VITE_APP_NAME,
    version: import.meta.env.PACKAGE_VERSION,
    facebook: import.meta.env.VITE_COMPANY_FACEBOOK,
    instagram: import.meta.env.VITE_COMPANY_INSTAGRAM,
    twitter: import.meta.env.VITE_COMPANY_TWITTER,
    youtube: import.meta.env.VITE_COMPANY_YOUTUBE,
    appMarica: import.meta.env.VITE_APP_MARICA,
  },
  i18n: {
    debbug: JSON.parse(
      (import.meta.env.VITE_I18N_DEBBUG ?? 'false').toLocaleLowerCase(),
      // Converts 'true' to true and 'false' to false
    ),
  },
}

export default Config
