var request = require('request');
var mongoose = require('mongoose');
var Stuff = require('../models/stuff');

var add = function(req,res){
  var stuffID = req.body.id;
  Stuff.findOne({id: stuffID}, function(err,stf){
    if(stf){
      stf.name = req.body.name || stf.name;
      stf.comment = req.body.comment || stf.comment;
      stf.save(function(err){
        if(err){
          res.send(err);
        }
        else{
          console.log("it saved");
          res.sendStatus(200);
        }
      });
    }
    else{
      var stuff = new Stuff({id: req.body.id, name: req.body.name, comment:req.body.comment});
      stuff.save(function(err,ses){
        if(err){
          console.log(err);
          res.send(err);
        }
        else{
          res.sendStatus(200);
        }
      });
    }
  });
}

module.exports = add;
