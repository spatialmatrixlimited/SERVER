//Database models
let User = require('../model/user.model');

//App Library
let hashMe = require('../lib/cryptic');
let makeCase = require('../lib/stringagent');

//eMail Notification
let jet = require('./mailjet.controller');
let userWelcome = require('../views/welcome.template');
mailer = require('./mailer.controller');

//Push Notification
let push = require('./push.notification.controller');

//Security Configuration
let asset = require('../config/assets');
let jwt = require('jsonwebtoken');

//Today
let today = new Date();

let registration = {

  //Add a new user
  addUser: (req, res) => {
    let payload = req.body;
    if ((!payload.firstname) || (!payload.lastname) || (!payload.password) || (!payload.email)) {
      res.json({
        success: false,
        message: 'Fill in all fields!',
        result: {}
      });
    } else {
      let hashed = hashMe.saltHashPassword(payload.password);
      let newUser = User({
        'document_owner': payload.document_owner ? payload.document_owner : '5ad89d5642157b14210eaf25',
        'personal': {
          'firstname': makeCase.titleCase(payload.firstname),
          'lastname': makeCase.titleCase(payload.lastname),
          'email': payload.email,
          'mobile': payload.mobile
        },
        'organisation.name': payload.organisation ? makeCase.titleCase(payload.organisation) : '',
        'security': {
          'user_type': payload.user_type ? payload.user_type : 'Individual',
          'role': payload.role,
          'accesscode': hashed.salt,
          'accesskey': hashed.hash
        },
        'playerid': payload.oneid ? payload.oneid : '',
        'created_on': today
      });
      newUser.save().then(
        (data) => {
          let sessionToken = jwt.sign(data._id, asset.secret, {
            expiresIn: 60 * 60 * 24
          });
          //send welcome email
          let welcomePayload = {
            firstname: makeCase.titleCase(payload.firstname),
            email: payload.email,
            user_type: payload.user_type ? payload.user_type.toLowerCase() : 'individual',
            title: `Hello ${makeCase.titleCase(payload.firstname)}, Welcome to SPiDER by Mobiforce`
          };
          //jet.mailJet(welcomePayload.email, welcomePayload.title, userWelcome.welcomeTemplate(welcomePayload));
          mailer(welcomePayload.email, welcomePayload.title, userWelcome.welcomeTemplate(welcomePayload));

          return res.json({
            success: true,
            message: 'Authenticated!',
            token: sessionToken,
            result: data
          });

        }, (err) => {
          res.json({
            success: false,
            message: 'Failed to create profile!',
            token: '',
            result: {}
          });
        });
    }
  },

  //Add a new organisation user
  addOrganisationUser: (req, res) => {
    let payload = req.body;
    if ((!payload.organisation) || (!payload.password) || (!payload.email)) {
      res.json({
        success: false,
        message: 'Fill in all fields!',
        result: {}
      });
    } else {
      let hashed = hashMe.saltHashPassword(payload.password);
      let newUser = User({
        'document_owner': payload.document_owner ? payload.document_owner : '5ad89d5642157b14210eaf25',
        'personal.firstname': makeCase.titleCase(payload.firstname),
        'personal.lastname': makeCase.titleCase(payload.lastname),
        'organisation': {
          'name': makeCase.titleCase(payload.organisation),
          'email': payload.email,
          'mobile': payload.mobile
        },
        'security': {
          'user_type': payload.user_type ? payload.user_type : 'Organisation',
          'role': payload.role,
          'accesscode': hashed.salt,
          'accesskey': hashed.hash
        },
        'playerid': payload.oneid ? payload.oneid : '',
        'created_on': today
      });
      newUser.save().then(
        (data) => {
          let sessionToken = jwt.sign(data._id, asset.secret, {
            expiresIn: 60 * 60 * 24
          });
          //send welcome email
          let welcomePayload = {
            firstname: makeCase.titleCase(payload.organisation),
            email: payload.email,
            title: `Hello ${makeCase.titleCase(payload.organisation)}, Welcome to SPiDER by Mobiforce`
          };
          //jet.mailJet(welcomePayload.email, welcomePayload.title, userWelcome.welcomeTemplate(welcomePayload));
          mailer(welcomePayload.email, welcomePayload.title, userWelcome.welcomeTemplate(welcomePayload));

          return res.json({
            success: true,
            message: 'Authenticated!',
            token: sessionToken,
            result: data
          });

        }, (err) => {
          res.json({
            success: false,
            message: 'Failed to create profile!',
            token: '',
            result: {}
          });
        });
    }
  }

}

module.exports = registration;