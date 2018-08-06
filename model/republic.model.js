var mongoose = require('mongoose');
var RepublicSchema = mongoose.Schema;


var republicSchema = new RepublicSchema({
  sponsor : String,
  republic : String,
  version : String
});

module.exports = mongoose.model('Republic', republicSchema,'republic');
