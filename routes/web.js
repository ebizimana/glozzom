var express = require('express'),
    router = express.Router();

// About Us Page
router.get("/about.html", function (req, res) {
    res.render("../views/web/about");
});

// Donate Page 
router.get("/donate.html", function (req, res) {
    res.render("../views/web/donate");
});

// MMS Today Page 
router.get("/mmsToday.html", function (req, res) {
    res.render("../views/web/mmsToday");
});

// Contact Page 
router.get("/contact.html", function (req, res) {
    res.render("../views/web/contact");
});

// Apply Page
router.get("/apply", function (req, res) {
    res.render("../views/web/apply");
});


module.exports = router