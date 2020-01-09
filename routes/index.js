var express          = require ("express"),
    router           = express.Router();
    Homeministry     = require('../models/homeMinistry');
    Schoolministry   = require('../models/schoolMinistry')


// Home Router
router.get('/', function(req,res){
    Homeministry.find({}, function(err,allHomePics){
        if(err){
            console.log(err)
        } else {
            Schoolministry.find({},function(err,allSchoolPics){
                if(err){
                    console.log(err)
                } else {
                    res.render('web/index', {schoolPics: allSchoolPics, homePics:allHomePics})
                }
            })
        }
    })

})

router.get("/index", function (req, res) {
    res.redirect('/')
});

// Sign Up form 

// Add the user info to the DB

// Log In form 

// Authenticate the user from DB

// Logout

module.exports = router