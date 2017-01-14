var express = require('express');
var router = express.Router();

var add = require('./add');
var show = require('./show');

router.get('/show', show);
router.post('/add', add);

module.exports = router;
