import faker from 'faker'

import { settings } from '../../config'

const createUser = info => ({
  username: faker.internet.userName(),
  name: `${faker.name.lastName()} ${faker.name.firstName()}`,
  avatar: `${settings.web.host}/placeholder-avatar-250x250.jpg`,
  token: faker.random.uuid(),
  ...info,
})

export const users = new Array(20)
  .fill(0)
  .map((_, index) => createUser({ id: index + 1 }))
