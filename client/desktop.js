'use strict';
import $ from "jquery";
import Audio from './music';

const audio = new Audio();

const socket = io();
socket.on('data', v => {
  $('h1').text(v);
});

const $soundBtn = $('#soundBtn');

$soundBtn.on('click', (e) => {
  if($soundBtn.text() == '再生') {
    $soundBtn.text('停止');
    audio.play();
  } else {
    $soundBtn.text('再生');
    audio.pause();
  }
});

