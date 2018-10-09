var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

var jsonParser = bodyParser.json()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(bodyParser.text());

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
   });