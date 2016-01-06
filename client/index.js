'use strict';

var request = new XMLHttpRequest();
var url = 'tell_your_world.mp3' 
request.open('GET', url, true);
request.responseType = 'arraybuffer';
request.send();

var context = new AudioContext();
var source = context.createBufferSource();
var buffer = null;
request.onload = function () {
  var res = request.response;
  context.decodeAudioData(res, function (buf) {
    source.buffer = buf;
  });
};

source.connect(context.destination);
// 再生
source.start(0);

