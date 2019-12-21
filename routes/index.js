var express = require ("express"),
    router = express.Router();

// Home Router
router.get('/', function(req,res){
    res.render("web/index")
})

router.get("/index", function (req, res) {
    res.render("web/index");
});

// Sign Up form 

// Add the user info to the DB

// Log In form 

// Authenticate the user from DB

// Logout

module.exports = router