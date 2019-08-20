import axios from 'axios'

import settings from '../config/settings'

const http = axios.create({
  baseURL: `${settings.api.host}${settings.api.prefix}`,
  timeout: 1000,
})

export default {
  request: (config, requestAdapter = null, responseAdapter = null) => {
    return http.request({
      ...config,
      transformRequest: [
        (data, headers) =>
          requestAdapter ? requestAdapter.parse(data, headers) : data,
      ],
      transformResponse: [
        data => (responseAdapter ? responseAdapter.parse(data) : data),
      ],
    })
  },
}
