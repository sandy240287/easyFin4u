var mongoose = require('mongoose');

module.exports = mongoose.model('deposit', {
  bank : String,
  number : String,
  amount : String,
  createDate : Date,
  maturityDate : Date,
  type : String,
  maturityAmount : String,
  userid : String
});
