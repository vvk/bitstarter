var express = require('express');
var fs = require('fs');
var buf = new Buffer('test');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var hello = fs.readFileSync('index.html');
  
  response.send(hello.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
