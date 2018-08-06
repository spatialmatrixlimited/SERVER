var jwt = require('jsonwebtoken');
var Republic = require('../model/republic.model');
var asset = require('../config/assets');

module.exports = (req, res, next)=>{
  var sessionToken = req.headers.authorization;

  if (typeof(sessionToken) != 'undefined'){
    jwt.verify(sessionToken, asset.secret, function(err, decodeId){
      if(decodeId){
        Republic.findOne({_id : decodeId}).then(function(republic){
          console.log('Welcome to Republic of ' + republic.republic);
          //console.log(req.header);
          next();
        }, function(err){
          res.status(401).send('Access Denied...');
        });
      }else{
        res.status(401).send('Access Denied...');
      }
    });
  }else{
    res.status(401).send('Access Denied...');
  }
};
