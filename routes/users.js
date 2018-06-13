var express = require('express');
var router = express.Router();
/**
 * router 路由
 */


/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.send('user:'+req.param.username);
});

module.exports = router;
