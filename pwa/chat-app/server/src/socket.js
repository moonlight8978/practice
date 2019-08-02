import Server from 'socket.io'

const connectionHandler = io => {
  io.on('connection', socket => {
    socket.emit('news', { hello: 'world' })
    socket.on('my other event', data => {
      console.log(data)
    })
  })
}

class Socket {
  io = null

  init(server) {
    this.io = new Server(server)
  }

  listen() {
    connectionHandler(this.io)
  }
}

export default new Socket()
