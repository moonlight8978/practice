import { mocks } from './mocks'

export const devClient = {
  request: (config, requestAdapter = null, responseAdapter = null) =>
    new Promise(resolve => {
      const mockedResponse = mocks[`${config.method}__${config.url}`]
      const response = responseAdapter
        ? {
            ...mockedResponse,
            data: responseAdapter.parse(mockedResponse.data),
          }
        : mockedResponse
      resolve(response)
    }),
}
