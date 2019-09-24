var express = require('express'),
    router = express.Router();

// About Us Page
router.get("/about.html", function (req, res) {
    res.render("about");
});

// Services Page 
router.get("/services.html", function (req, res) {
    res.render("services");
});

// Blog Page 
router.get("/blog.html", function (req, res) {
    res.render("blog");
});

// Contact Page 
router.get("/contact.html", function (req, res) {
    res.render("contact");
});

module.exports = router