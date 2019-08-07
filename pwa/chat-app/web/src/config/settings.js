const env = process.env.NODE_ENV || 'development'

const settings = {
  development: {
    api: {
      host: 'http://localhost:60000',
      prefix: '/api',
    },
  },
  production: {},
}

export default settings[env]
