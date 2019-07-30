import http from 'http'
import debug from 'debug'

import app from '../app'
import socket from '../socket'

const runApp = () => {
  const server = http.createServer(app)
  const logger = debug('server:server')
  const port = normalizePort(process.env.PORT || '60080')

  socket.init(server)
  app.set('port', port)

  server.listen(port)
  server.on('error', onError)
  server.on('listening', onListening)

  socket.listen()

  function onListening() {
    const addr = server.address()
    const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`
    logger(`Listening on ${bind}`)
  }

  function onError(error) {
    if (error.syscall !== 'listen') {
      throw error
    }

    const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`

    switch (error.code) {
      case 'EACCES':
        console.error(`${bind} requires elevated privileges`)
        process.exit(1)
        break
      case 'EADDRINUSE':
        console.error(`${bind} is already in use`)
        process.exit(1)
        break
      default:
        throw error
    }
  }
}

function normalizePort(val) {
  const port = parseInt(val, 10)

  if (port >= 0) {
    return port
  }

  return false
}

runApp()
