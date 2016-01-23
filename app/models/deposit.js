var mongoose = require('mongoose');

module.exports = mongoose.model('deposit', {
  bank : String,
  number : String,
  amount : String,
  createDate : String,
  maturityDate : String,
  type : String,
  maturityAmount : String,
  id : String,
  userid : String
});
