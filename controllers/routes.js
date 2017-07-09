const request = require("request");
const cheerio = require("cheerio");
const ObjectID = require('mongodb').ObjectID;
const express = require("express");
const path = require("path");
const db = require("../models/mongo");

const router = new express.Router();

router.get('/all', function(req, res) {
  db.collection.find({}).sort( {createdAt: -1} ).toArray(function( err, docs) {
    res.json(docs);
  })
});

router.get('/favs', function(req, res) {

  db.collection.find({favorite: 1}).toArray(function( err, docs) {
    res.json(docs);
  })
});

router.get("/link/:id/:index", function(req, res) {

  db.collection.find( { _id: ObjectID(req.params.id) }, { _id: 0, links: 1 } ).toArray( function(err, doc) {

    if(err) console.log(err);
    res.json(doc[0].links[req.params.index]);
  })
});

router.post("/search", function(req, res) {

    var insertedId = null;
    var re = new RegExp("https:");

    var search = {
      target: req.body,
      titles: [],
      prices: [],
      links: [],
      favorite: 0,
      createdAt: Date.now(),
      updatedAt: Date.now()
    }

    db.collection.insertOne(search, function(err, res) {
      if(err) console.log(err);
      insertedId = res.insertedId;
    });

    var baseUrl = "https://losangeles.craigslist.org";
    var searchUrl = "/search/sss?query=";

    request(baseUrl + searchUrl + search.target, function(error, response, html) {

      var $ = cheerio.load(html);

      $("ul.rows li.result-row p.result-info").each(function(i, element) {

        var title = $(this).children(".result-title").text();
        var price = $(this).children(".result-meta").children(".result-price").text().replace(/\$/g, '');
        var link = $(this).children("a").attr("href");

        if( re.test(link) === false ) link = baseUrl + link;

        db.collection.updateOne( { _id: ObjectID(insertedId) }, { $push: { titles: title } } );
        db.collection.updateOne( { _id: ObjectID(insertedId) }, { $push: { prices: parseFloat(price) } } );
        db.collection.updateOne( { _id: ObjectID(insertedId) }, { $push: { links: link } } );
      });

      db.collection.find({ _id: ObjectID(insertedId) }).toArray( function(err, doc) {
        res.send(doc[0]);
      })
    });
  });


router.post('/delete/:id', function(req, res) {

  db.collection.deleteOne( { _id: ObjectID(req.params.id) }, function(err, result) {

    if(err) res.json(err);

    db.collection.find({}).sort( {createdAt: -1} ).toArray(function( err, docs) {
      res.json(docs);
    })
  })
});


router.post('/favorite/:id/:toggle', function(req, res) {

  var isFav = parseInt(req.params.toggle);

  db.collection.updateOne( { _id: ObjectID(req.params.id) }, { $set: { favorite: isFav } }, function(err, result) {

    if(result.result.ok === 1) {
      res.send(true);

    } else {
      res.send(false);
    };

  });
});

router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
