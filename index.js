'use strict';
const express  = require('express');
const path     = require('path');
const http     = require('http');
const socketio = require('socket.io');
const useragent = require('express-useragent');

const app    = express();
const server = http.Server(app);
const io     = socketio(server);

app.set('view engine', 'ejs');
app.use(useragent.express());
// app.use(express.static(path.resolve(__dirname, 'public')))
app.use(express.static('public'))

app.get('/', (req, res) => {
  if (req.useragent.isMobile) {
    res.render('mobile')
  } else {
    res.render('index')
  }
});

io.on('connection', socket => {
  console.log('a user connected');

  socket.on('msg', msg => {
    io.emit('data', 'hello emit world');
    console.log(msg);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

const port = process.env.PORT || 8080
server.listen(port, () => {
  console.log('listening on :', port)
});
