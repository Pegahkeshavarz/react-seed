var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(path.join(__dirname, "./client")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ectended: false}));

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(8000, function() {
  console.log("listening on port 8000");
})
