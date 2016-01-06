'use strict';
const express  = require('express');
const path     = require('path');
const http     = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socketio(server);

app.set('view engine', 'ejs');
// app.use(express.static(path.resolve(__dirname, 'public')))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
});

const port = process.env.PORT || 8080
server.listen(port, () => {
  console.log('listening on :', port)
});
