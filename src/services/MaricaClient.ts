import axios from 'axios'

import Config from 'Config'

const MaricaApi = axios.create({
  baseURL: Config.api.base_URL,
})

MaricaApi.interceptors.request.use((config) => {
  return {
    ...config,
    params: {
      token: Config.api.token,
      ...config.params,
    },
  }
})

export default MaricaApi
