var ocdRender = require('..');
var fs = require('fs');

ocdRender.async()
  .then(function (png) {
    fs.writeFileSync('./png-gradient.png', png, 'binary');
  });

fs.writeFileSync('./png-gradient2.png', ocdRender.sync(), 'binary');
