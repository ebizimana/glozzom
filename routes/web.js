var express = require('express'),
    router = express.Router();

// About Us Page
router.get("/about.html", function (req, res) {
    res.render("../views/web/about");
});

// Services Page 
router.get("/services.html", function (req, res) {
    res.render("../views/web/services");
});

// Blog Page 
router.get("/blog.html", function (req, res) {
    res.render("../views/web/blog");
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