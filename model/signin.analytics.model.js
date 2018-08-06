var mongoose = require('mongoose');
var SignInAnalyticsSchema = mongoose.Schema;


var signInAnalyticsSchema = new SignInAnalyticsSchema({
  email : {type : String, lowercase : true},
  usertype : String,
  ipaddress : String,
  latitude : Number,
  longitude : Number,
  hour : Number,
  day : Number,
  month : Number,
  year : Number,
  mobile : String,
  phone : String,
  tablet : String,
  useragent : String,
  operating_system : String,
  isPhone : Boolean,
  isBot : Boolean,
  webkit_version : String,
  build_version : String,
  authorization_code : String,
  created_on : { type : Date, default : Date.now }
});

module.exports = mongoose.model('SignInAnalytics', signInAnalyticsSchema,'signinanalytics');
