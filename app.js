// Packages Setup 
var express    = require("express"),
    mongoose   = require('mongoose'),
    url        = 'mongodb://localhost/mms'
    app        = express();

// Models 
var User            = require('./models/user'),
    Homeministry   = require('./models/homeMinistry')

// App Config 
mongoose.connect(url,{useNewUrlParser:true})
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
