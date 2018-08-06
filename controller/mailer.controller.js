/*  
const nodemailer = require('nodemailer');
 
 //Send message to support
 module.exports = (email, title, body) => {
     // create reusable transporter object using the default SMTP transport
     let transporter = nodemailer.createTransport({
         host: 'smtp.gmail.com',
         port: 465,
         secure: true, // use SSL
         auth: {
            user: 'spiderbymobisoft@gmail.com',
            pass: 'spider2018@@'
         }
     });

     let mailOptions = {
         from: '"SPiDER by Mobisoft" <spiderbymobisoft@gmail.com>', // sender address
         to: email, // list of receivers
         subject: title, // Subject line
         text: body, // plain text body
         html: body // html body
     };

     // send mail with defined transport object
     transporter.sendMail(mailOptions, (error, info) => {
         if (error) {
             console.log('Error Occurred');
             console.log(error);
             //return {success : false,message : error};

         }
         console.log('Message Sent');
         console.log('Message %s sent: %s', info.messageId, info.response);
     });
 } */


 var asset = require('../config/assets');
 var mailjet = require ('node-mailjet')
 .connect(asset.MJPKSMTP, asset.MJSKSMTP);

 module.exports = (recepient, title, template)=>{
   var request = mailjet
       .post("send")
       .request({
           "FromEmail":"female.hire@wuntlist.com",
           "FromName":"SPiDER by Mobiforce",
           "Subject": title,
           "Text-part":"Important notification from SPiDER by Mobiforce | SpatialMatrix Property Identification & Enumeration",
           "Html-part":template,
           "Recipients":[
                   {
                           "Email": recepient
                   },{
                           "Email": 'kolagrey@gmail.com'
                   },{
                           "Email": 'tobi.sowole@gmail.com'
                   }
           ]
       }).then((data)=>{
         console.log(data.body.Sent);
       }).catch((e)=>{
         console.log(e);
       });
 }

 //exports.mailJet = mailJet;
