//Database Model
let Support = require('../model/support.model');

//eMail Notification
let supportMail = require('../views/support.template');
let mailer = require('./mailer.controller');


let support = {

    //Add a new message
    add: (req, res) => {
        let payload = req.body;
        let newMessage = Support({
            'message': payload.message,
            'user': payload.user,
            'device': payload.device,
            'location': payload.location,
            'created': payload.created
        });
        newMessage.save().then(
            (data) => {
                //send support email
                let title = `New support request from ${payload.user.firstname} sent from ${payload.device.model}`;
                mailer('asheori.research@gmail.com', title, supportMail.supportTemplate(payload));
                return res.json({
                    success: true
                });

            }, (err) => {
                res.json({
                    success: false
                });
            });
    },

    // Get all 
    getAll: (req, res) => {
        Support.find({
            'documentstatus': 1
        }, (err, data) => {
            if (err) {
                res.json({
                    result: []
                });
            } else {
                return res.json({
                    result: data
                });
            }
        }).sort({
            'last_seen': -1
        });
    },


    // Get support message
    getOne: (req, res) => {
        Support.findOne({
            '_id': req.params.id
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
    }
}

module.exports = support;