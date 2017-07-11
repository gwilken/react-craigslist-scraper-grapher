
const express = require("express");
const bodyParser = require("body-parser");
const mongo = require("./models/mongo.js");
const noderoutes = require("./controllers/routes");

var app = express();

var PORT = process.env.PORT || 9003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));
app.use(express.static("./public"));
app.use("/", noderoutes);

mongo.connect();

app.listen(PORT, function() {
  console.log("Web server listening on port", PORT);
});
