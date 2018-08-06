var mongoose = require('mongoose');
var InteractionSchema = mongoose.Schema;

var interactionSchema= new InteractionSchema({
  interactioncode : String,
  contentcode : String,
  views : Number,
  shares : Number,
  documentstatus : { type: Number, default: 1 },
  created_on : { type: Date, default: Date.now }
});

module.exports = mongoose.model('Interaction', interactionSchema,'interactions');
