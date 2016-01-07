import $ from "jquery";

const socket = io();
socket.on('data', v => {
  console.log(v);
  let $el = $('<h1>');
  $el.text(v);
  $('#main').append($el);
  $el.animate({
    right: "100%"
  }, 10000, 'linear')
});

