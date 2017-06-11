const MongoClient = require('mongodb').MongoClient;
const assert      = require('assert');

var url = 'mongodb://localhost:27017/scraper';
var mongo = {};


  module.exports = {

    connect: function(callback) {

      MongoClient.connect(url, function(err, db) {
        console.log("Connected successfully to mongodb");
        module.exports.db = db;
        module.exports.collection = db.collection('data');
        callback();

      });
    }

  };
