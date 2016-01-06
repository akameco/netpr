(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var request = new XMLHttpRequest();
var url = 'tell_your_world.mp3';
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

},{}]},{},[1]);
