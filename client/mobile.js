'use strict';
import $ from "jquery";
let socket = io();

$('#socketBtn').on('click', e => {
  socket.emit('msg', 'hello');
});

