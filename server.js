var express = require('express');
// require path so that we can use path stuff like path.join
var path = require('path');
var bodyParser = require('body-parser');
// instantiate the app
var app = express();
// set up a static file server that points to the "client" directory
app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.json());
require('./server/config/mongoose.js');
require('./server/config/route.js')(app);
app.listen(8000, function() {
  console.log('Friends app on: 8000');
});