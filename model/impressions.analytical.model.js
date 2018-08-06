var mongoose = require('mongoose');
var AnalyticalSchema = mongoose.Schema;


var analyticalSchema = new AnalyticalSchema({
  traffic : AnalyticalSchema.Types.Mixed,
  created_on : { type: Date, default: Date.now }
});

module.exports = mongoose.model('Analytical', analyticalSchema,'analyticals');
