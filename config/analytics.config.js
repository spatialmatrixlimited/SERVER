
const path = require('path');
const analyticsStorage = path.resolve(__dirname, '../../db/analytics/gisapp.db');

//DATASTORE INIT
let Datastore = require('nedb');
let db = {};

//Private Conversation DB
db.analytics = new Datastore({
    filename: analyticsStorage,
    autoload: true
});

db.analytics.ensureIndex({
    fieldName: 'created_on'
}, (err) => {});

module.exports = db;