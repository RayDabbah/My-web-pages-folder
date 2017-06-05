var express = require('express');
require('ejs');
var app = express();
//app.set("view engine", "html");
app.get("/torahtapes", function(req, res) {
   res.render("torahtapes.ejs");
});

app.listen(3000, "localhost", () => console.log('The server started'));