var request = require('request');
var mongoose = require('mongoose');
var Stuff = require('../models/stuff');

var show = function(req,res){
    stuff = Stuff.find({}, 'id name comment', function (err,stf){

      res.send(stf);
    });
}

module.exports = show;
