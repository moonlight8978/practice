const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();
const server = http.Server(app);

const io = socketIO(server);
app.use(bodyParser.json());

io.on('connection', function(socket) {
  console.log('a user connected');
  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
  socket.broadcast.emit('hi');
  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
