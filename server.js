
const express = require("express");
const bodyParser = require("body-parser");
const mongo = require("./models/mongo.js");
const noderoutes = require("./routes/noderoutes");

var app = express();

var PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));
app.use(express.static("./public"));
app.use("/", noderoutes);


mongo.connect();

app.listen(PORT, function() {
  console.log("Server listening on port", PORT);
});
