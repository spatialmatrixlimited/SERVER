var mongoose = require('mongoose');
var AnalyticsSchema = mongoose.Schema;


var analyticsSchema = new AnalyticsSchema({
  hour : Number,
  day : Number,
  month : Number,
  year : Number,
  created_on : { type: Date, default: Date.now }
});

module.exports = mongoose.model('Analytics', analyticsSchema,'analytics');
