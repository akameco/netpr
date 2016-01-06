'use strict';

let request = new XMLHttpRequest();
let url = 'tell_your_world.mp3' 
request.open('GET', url, true);
request.responseType = 'arraybuffer';
request.send();

let context = new AudioContext();
let source = context.createBufferSource();
let buffer = null;
request.onload = function () {
  let res = request.response;
  context.decodeAudioData(res, function (buf) {
    source.buffer = buf;
  });
};

source.connect(context.destination);

export default source;
