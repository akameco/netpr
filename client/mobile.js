import $ from "jquery";
import WebSpeech from './speech';

let socket = io();
let speech = new WebSpeech();

speech.on('data', (value) => {
  socket.emit('msg', value);
});

let $el = $('#socketBtn');
$el.on('click', (el) => {
  if (speech.nowRecognition) {
    el.target.textContent = 'スタート';
  } else {
    el.target.textContent = 'ストップ';
  }
  speech.toggle();
});

