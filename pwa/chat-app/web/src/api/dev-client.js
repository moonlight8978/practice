import { mocks } from './mocks'

export const devClient = {
  request: (config, adapter) => {
    return mocks[`${config.method}__${config.url}`]
  },
}
