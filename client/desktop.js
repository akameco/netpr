'use strict';
import $ from "jquery";
import source from './music';

let socket = io();

socket.on('data', v => {
  $('h1').text(v);
});

source.start(0);

