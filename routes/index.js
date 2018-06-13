var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello',function (req,res,next) {
    console.log('it is time to transfer')
    next();
    //res.render('homePage',{title:'Hello Express'});
});
router.get('/hello',function (req,res,next) {
    res.render('homePage',{title:'Hello Express  next()'});
});

//router.all()
//router.put()

module.exports = router;
