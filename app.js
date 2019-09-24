// Packages Setup 
var express = require("express"),
  app = express();

// Models 

// App Config 
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Passport Config

// Routes Setup
var indexRouter = require ('./routes/index'),
    webRouter   = require('./routes/web');

// Routes Config 
app.use(indexRouter),
app.use(webRouter);


// Server Starting 
app.listen(process.env.PORT || 5000, function(req, res) {
  console.log("Server Starting On Port 5000 ....");
});
