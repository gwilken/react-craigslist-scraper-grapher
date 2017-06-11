var express = require("express");
var path = require("path");

var router = new express.Router();

//router.use("/api", apiRoutes);

router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
