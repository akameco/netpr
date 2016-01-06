'use strict';
import userAgent from './ua';
import source from './music';

// 再生
if(userAgent.Mobile || userAgent.Tablet) {
  require('./mobile');
} else {
  require('./desktop');
}

