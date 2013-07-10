var express = require('express');
require ('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buffer = new Buffer(256);
  buffer = fs.readFileSync("index.html","utf-8");
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
