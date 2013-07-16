var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.use(express.static(__dirname + '/static'));

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  var content = fs.readFileSync('index.html');
  response.send(content.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
