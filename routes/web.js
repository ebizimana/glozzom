var express = require('express'),
    router = express.Router();

// About Us Page
router.get("/about", function (req, res) {
    res.render("web/about");
});

// Donate Page 
router.get("/donate", function (req, res) {
    res.render("web/donate");
});

// MMS Today Page 
router.get("/mmsToday", function (req, res) {
    res.render("web/mmsToday");
});

// Contact Page 
router.get("/contact", function (req, res) {
    res.render("web/contact");
});

// Apply Page
router.get("/apply", function (req, res) {
    res.render("web/apply");
});

// Home Ministry Page
router.get('/homeMinistry', function(req,res){
    res.render('web/homeMinistry')
})

// New - Display form to add a picture in the db
router.get('/new',function(req,res){
    res.render('web/new')
})


module.exports = router