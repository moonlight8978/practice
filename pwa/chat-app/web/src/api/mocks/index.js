import { users } from './data'

export const mocks = {
  'post__/sign-in': {
    data: {
      ...users[0],
      tokenExpiration: new Date(2020, 10, 10).getTime(),
    },
  },
}
