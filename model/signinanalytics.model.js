var mongoose = require('mongoose');
var SignInAnalyticsSchema = mongoose.Schema;


var signInAnalyticsSchema = new SignInAnalyticsSchema({
  user : String,
  hour : Number,
  day : Number,
  month : Number,
  year : Number,
  created_on : Date,
  mobile : String,
  phone : String,
  tablet : String,
  useragent : String,
  operating_system : String,
  isPhone : Boolean,
  isBot : Boolean,
  webkit_version : String,
  build_version : String,
  authorization_code : String

});

module.exports = mongoose.model('SignInAnalytics', signInAnalyticsSchema,'signinanalytics');
