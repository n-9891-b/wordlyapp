var path = require('path');
var db = require('knex')({
  client: 'sqlite3',
  connection: {
    host: '127.0.0.1',
    user: 'your_database_user',
    password: 'password',
    database: 'wordlydb',
    charset: 'utf8',
    filename: path.join(__dirname, '../db/wordly.sqlite')
  }
});

db.schema.hasTable('words').then(function(exists) {
  if (!exists) {
    db.schema.createTable('words', function(word) {
      word.increments('id').primary();
      word.string('word', 100);
      word.string('pronunciation', 100);
      word.string('definition', 1000);
      word.string('partofspeech', 100);
      word.string('example', 1000);
    }).then(function (table) {
      console.log('Created words table');
    });
  }
});

var Bookshelf = require('bookshelf')(db);
module.exports = Bookshelf;