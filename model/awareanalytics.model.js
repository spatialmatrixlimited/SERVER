var mongoose = require('mongoose');
var AwareAnalyticsSchema = mongoose.Schema;


var awareAnalyticsSchema = new AwareAnalyticsSchema({
  mobile : String,
  latitude : Number,
  longitude : Number,
  created_on : { type: Date, default: Date.now }
});

module.exports = mongoose.model('AwareAnalytics', awareAnalyticsSchema,'awareanalytics');
