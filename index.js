var menubar = require('menubar');

var opts = {
  'dir': __dirname + '/',
  'width': 320,
  'height': 630,
  'y': 25,
  'transparent': true
};

var mb = menubar(opts);

mb.on('ready', function ready() {
  console.log('app is ready');
});
