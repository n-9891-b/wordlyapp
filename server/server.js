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
  request('http://api.pearson.com/v2/dictionaries/ldoce5/entries?headword=' + req.body.word + '&apikey=uUZqExZoy3iTG07o765d6GUAARhKpWqU', function(err, response, body){
    // parseString(body, function(err, parsed){
      console.log(body);
      res.send(body);      
    // });


  });
});

app.listen(port, function(req, res){
  console.log('Wordly app listening on port ' + port + '!');
});


// uUZqExZoy3iTG07o765d6GUAARhKpWqU

// ldoce5

// http://api.pearson.com/v2/dictionaries/ldoce5/entries?headword=hypocrite&apikey=YuUZqExZoy3iTG07o765d6GUAARhKpWqU
