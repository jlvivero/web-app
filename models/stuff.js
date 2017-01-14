var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StuffSchema = new Schema({
  id: String,
  name: String,
  comment: String,
});

module.exports = mongoose.model('Stuff',StuffSchema);
