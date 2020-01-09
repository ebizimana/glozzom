var express          = require('express'),
    Homeministry     = require('../models/homeMinistry'),
    Schoolministry   = require('../models/schoolMinistry'),
    router           = express.Router();


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

// New - Display form 
router.get('/new',function(req,res){
    res.render('web/new')
})

// Create - Add a new picture to db
router.post('/',function(req,res){
    var url               = req.body.url,
        desc              = req.body.description,
        schoolUrl         = req.body.schoolUrl,
        schoolDescription = req.body.schoolDescription;
    var newPic = {
        homeurl:url,
        desc: desc
    };

    var schoolPic = {
        schoolUrl:schoolUrl,
        schoolDescription:schoolDescription
    };
    
    Homeministry.create(newPic, function(err,pic){
        if(err){
            console.log(err)
        } else {
            res.redirect('/index')
        }
    }) 

    Schoolministry.create(schoolPic, function(err,pic){
        if(err){
            console.log(err)
        } else {
            res.redirect('/index')
        }
    })


})

// Show all Homelife Pics
router.get('/index', function(req,res){

})


module.exports = router