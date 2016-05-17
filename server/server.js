var express = require('express');
var request = require('request');
var bodyParser  = require('body-parser');
// var xmlparser = require('xml-parser');
var parseString = require('xml2js').parseString;
// var xmlparser = require('express-xml-bodyparser');
var app = express();

var port = process.env.PORT || 3468;

app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.json());

app.post('/api/definition', function(req, res){
  // console.log(req.body.word);
  request('http://www.dictionaryapi.com/api/v1/references/collegiate/xml/' + req.body.word + '?key=32fa6586-c02f-4c82-98ae-2a1cd81e62c0', function(err, response, body){
    parseString(body, function(err, parsed){
      console.log(parsed);
      res.send(parsed);      
    });


  });
});

app.listen(port, function(req, res){
  console.log('Wordly app listening on port ' + port + '!');
});
