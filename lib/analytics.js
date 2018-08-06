
  //var VisitsAnalytics = require('../model/visits.analytics.model');
  var SignInAnalytics = require('../model/signin.analytics.model');
  var timePrefect = require ('./timeprefect');

  var MobileDetect = require('mobile-detect');

  //log signin  rate for analytics
  var logSignIn = (req)=>{
    var md = new MobileDetect(req.headers['user-agent']);
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    var signInAnalytics = SignInAnalytics({
        email : req.body.email,
        usertype : req.body.usertype,
        ipaddress : ip,
        latitude : req.body.latitude,
        longitude : req.body.longitude,
        hour : timePrefect.getHour(),
        day : timePrefect.getDay(),
        month : timePrefect.getMonth(),
        year : timePrefect.getYear(),
        created_on : timePrefect.getUTCDate(),
        mobile : md.mobile(),
        phone : md.phone(),
        tablet : md.tablet(),
        useragent : md.userAgent(),
        operating_system : md.os(),
        isPhone : md.is('iPhone'),
        isBot : md.is('bot'),
        webkit_version : md.version('Webkit'),
        build_version : md.versionStr('Build'),
        authorization_code : req.headers.authorization
      });
      signInAnalytics.save((err, data)=>{
        console.log('analytics logged...');
      });
      return true;
  }

  var getIP = (req)=>{
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    return ip;
  }

  exports.logSignIn = logSignIn;
  exports.getIP = getIP;
