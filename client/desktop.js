import $ from "jquery";

const socket = io();
socket.on('data', v => {
  $('h1').text(v);
});

