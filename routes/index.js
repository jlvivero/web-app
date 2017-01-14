var express = require('express');
var router = express.Router();

/*
var link = require('./link');
var max_likes = require('./likes');
var session = require('./createSession');
*/
var add = require('./add');
var show = require('./show');

router.get('/show', show);
router.post('/add', add);
/*
router.get('/facebook', function(req,res){
  res.send("this will return the request parameteres that you can do to facebook and will eventually have a post that will be able to select which parameteres you want");
});
router.post('/facebook/likes', max_likes);
router.get('/facebook/link', link);
router.post('/facebook/newsession', session);
*/
module.exports = router;
