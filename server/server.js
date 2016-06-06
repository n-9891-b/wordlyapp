var express = require('express');
var request = require('request');
// var db = require('./config/dbconfig.js');

var bodyParser  = require('body-parser');
var parseString = require('xml2js').parseString;
var app = express();

var port = process.env.PORT || 3468;

app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.json());

app.post('/api/definition', function(req, res){
  request('http://api.pearson.com/v2/dictionaries/ldoce5/entries?headword=' + req.body.word + '&apikey=uUZqExZoy3iTG07o765d6GUAARhKpWqU', function(err, response, body){
      console.log(body);
      if (err)
        res.send(err);
      else
        res.send(body);
  });
});

app.listen(port, function(req, res){
  console.log('Wordly app listening on port ' + port + '!');
});
