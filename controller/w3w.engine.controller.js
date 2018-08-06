
//Database Model
let StreetRecord = require('../model/street.model');
let PropertyRecord = require('../model/property.model');
let EntityRecord = require('../model/entity.model');
let request = require('request');

let processStreet = () => {
    console.log('W3W Engine Started - Street');
    StreetRecord.find({
        $or: [{ 'location.whatthreewords': null },{ 'location.whatthreewords': '' }]
    }, (err, doc) => {
        if (err) {
            console.log('An error occured');
        } else {
            if (doc.length > 0) {
                let totalRecords = doc.length;
                let total = doc.length;
                let index = 0;
                let _body;
                let prgInterval = setInterval(()=>{
                    request(`https://api.what3words.com/v2/reverse?coords=${doc[index].location.coordinates[1]},${doc[index].location.coordinates[0]}&display=minimal&format=json&key=EVFEUB3R`, function (error, response, body) {
                        if (error) {
                            console.log('error:', error); 
                        } else {
                            _body = JSON.parse(body);
                            if(response && response.statusCode == 200){
                                StreetRecord.findOneAndUpdate({
                                    '_id': doc[index]._id
                                },{
                                    'location.whatthreewords': _body.words
                                },{ new: true },(err,newData)=>{
                                    if(err){
                                        console.log('An error occurred while updating record with W3W');
                                    }else{
                                        console.log('Street Record updated successfully with W3W');
                                    }
                                });
                            } 
                            index += 1;
                            console.log(`Record ${index} processed`);
                            totalRecords -= 1;
                            if(totalRecords === 0){
                                console.log(`${index} out of ${total} records processed`);
                                clearInterval(prgInterval);
                            }
                        }
                    });
                },3000);
            }else{
                console.log("No street data to process by W3W Engine");
            }
        }
    });
}

let processProperty = () => {
    console.log('W3W Engine Started - Property');
    PropertyRecord.find({
        $or: [{ 'location.whatthreewords': null },{ 'location.whatthreewords': '' }]
    }, (err, doc) => {
        if (err) {
            console.log('An error occured');
        } else {
            if (doc.length > 0) {
                let totalRecords = doc.length;
                let total = doc.length;
                let index = 0;
                let _body;
                let prgInterval = setInterval(()=>{
                    request(`https://api.what3words.com/v2/reverse?coords=${doc[index].location.coordinates[1]},${doc[index].location.coordinates[0]}&display=minimal&format=json&key=EVFEUB3R`, function (error, response, body) {
                        if (error) {
                            console.log('error:', error); 
                        } else {
                            _body = JSON.parse(body);
                            if(response && response.statusCode == 200){
                                PropertyRecord.findOneAndUpdate({
                                    '_id': doc[index]._id
                                },{
                                    'location.whatthreewords': _body.words
                                },{ new: true },(err,newData)=>{
                                    if(err){
                                        console.log('An error occurred while updating record with W3W');
                                    }else{
                                        console.log('Property Record updated successfully with W3W');
                                    }
                                });
                            } 
                            index += 1;
                            console.log(`Record ${index} processed`);
                            totalRecords -= 1;
                            if(totalRecords === 0){
                                console.log(`${index} out of ${total} records processed`);
                                clearInterval(prgInterval);
                            }
                        }
                    });
                },3000);
            }else{
                console.log("No property data to process by W3W Engine");
            }
        }
    });
}


let processEntity = () => {
    console.log('W3W Engine Started - Entity');
    EntityRecord.find({
        $or: [{ 'location.whatthreewords': null },{ 'location.whatthreewords': '' }]
    }, (err, doc) => {
        if (err) {
            console.log('An error occured');
        } else {
            if (doc.length > 0) {
                let totalRecords = doc.length;
                let total = doc.length;
                let index = 0;
                let _body;
                let prgInterval = setInterval(()=>{
                    request(`https://api.what3words.com/v2/reverse?coords=${doc[index].location.coordinates[1]},${doc[index].location.coordinates[0]}&display=minimal&format=json&key=EVFEUB3R`, function (error, response, body) {
                        if (error) {
                            console.log('error:', error); 
                        } else {
                            _body = JSON.parse(body);
                            if(response && response.statusCode == 200){
                                EntityRecord.findOneAndUpdate({
                                    '_id': doc[index]._id
                                },{
                                    'location.whatthreewords': _body.words
                                },{ new: true },(err,newData)=>{
                                    if(err){
                                        console.log('An error occurred while updating record with W3W');
                                    }else{
                                        console.log('Entity Record updated successfully with W3W');
                                    }
                                });
                            } 
                            index += 1;
                            console.log(`Record ${index} processed`);
                            totalRecords -= 1;
                            if(totalRecords === 0){
                                console.log(`${index} out of ${total} records processed`);
                                clearInterval(prgInterval);
                            }
                        }
                    });
                },3000);
            }else{
                console.log("No entity data to process by W3W Engine");
            }
        }
    });
}

exports.processStreet = processStreet;
exports.processProperty = processProperty;
exports.processEntity = processEntity;