var Buffer = require('buffer').Buffer;
var Png = require('png').Png;
var Promise = require("bluebird");

var createOcdPng = function (ocd) {
  var width = 400
  var height = 300;
  var data = new Buffer(width*height*3);
  for (var i=0; i<height; i++) {
    for (var j=0; j<width; j++) {
      data[i*width*3 + j*3 + 0] = 255*j/width;
      data[i*width*3 + j*3 + 1] = 255*i/height;
      data[i*width*3 + j*3 + 2] = 0xff/2;
    }
  }
  return new Png(data, width, height);
}

var renderOcdAsync = function (ocd) {
  return new Promise(function(resolve) {
    var png = createOcdPng(ocd);
    png.encode(resolve);
  });
}

var renderOcdSync = function (ocd) {
  var png = createOcdPng(ocd);
  return png.encodeSync().toString('binary');
}

module.exports = {
  async: renderOcdAsync,
  sync: renderOcdSync
};
