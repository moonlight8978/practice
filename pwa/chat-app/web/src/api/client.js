import axios from 'axios'
import settings from '../config/settings'

const http = axios.create({
  baseURL: `${settings.api.host}${settings.api.prefix}`,
  timeout: 1000,
})

export default {
  request: (config, adapter) => {
    return http.request({
      ...config,
      transformResponse: [data => adapter.parse(data)],
    })
  },
}
