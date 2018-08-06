let Republic = require('../model/republic.model');
let jwt = require('jsonwebtoken');
let asset = require('../config/assets');
let w3wEngine = require('../controller/w3w.engine.controller');
let api = {

  /****************************************************************************************
    GENERATE APP CONFIGURATION PARAMETERS
  ****************************************************************************************/
  generateLove: (req, res) => {
    let params = req.params.code || 'password';
    let sessionToken = jwt.sign('58b1f590a84c675de0d42e9b', asset.secret);
    let _sessionToken = jwt.sign(params, asset.secret);
    return res.json({
      result: {
        success: true,
        message: "It's an Orgasm!",
        token: sessionToken,
        _token: _sessionToken
      }
    });
  },

  generateHeaders: (req, res) => {
    return res.json({
      headers: req.headers
    });
  },

  getCurrentVersion: (req, res) => {
    Republic.findOne({
      republic: req.params.republic
    }, (err, data) => {
      if (err) {
        res.json({
          result: {}
        });
      } else {
        return res.json({
          result: data
        });
      }
    });
  },

  createApp: (req, res) => {
    if ((!req.body.republic) || (!req.body.version)) {
      res.json({
        success: false,
        message: 'Fill in all fields!'
      });
    } else {
      let hashed = hashMe.saltHashPassword(req.body.token);
      let newApp = Republic({
        'republic': req.body.republic,
        'version': req.body.version,
        'accesscode': hashed.salt,
        'accesskey': hashed.hash
      });
      newApp.save().then(
        (data) => {

          res.json({
            success: true,
            message: 'Successfully created republic!',
            token: req.body.token,
            data: data
          });

        }, (err) => {
          res.json({
            success: false,
            message: 'Failed to create republic!',
            token: '',
            data: {}
          });
        });
    }
  },


  /****************************************************************************************
    W3W Resolution Engine
  ****************************************************************************************/

  w3wEngineStart: (req, res) => {
    w3wEngine.processStreet();
    w3wEngine.processProperty();
    w3wEngine.processEntity();
    res.json({
      status: 'Engine Started'
    });
  }
}

module.exports = api;