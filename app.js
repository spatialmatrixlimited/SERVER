var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var rfs = require('rotating-file-stream');
var path = require('path');
var config = require('./config/database');
var routes = require('./routes/routes');
var headers = require('./middleware/headers');
var session = require('./middleware/sessionmanager');
var mongoose = require('mongoose');
var cors = require('cors');
var morgan = require('morgan');
var analytical = require('./middleware/analytical');
var ga = require('./config/global.config');

mongoose.Promise = global.Promise;
mongoose.connect(config.database, {
    useMongoClient: true,
    config: {
        autoIndex: false
    },
    promiseLibrary: global.Promise
});



var app = express();

//set directory of log files
var logDirectory = path.join(__dirname, 'log')

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

// create a rotating write stream
var accessLogStream = rfs('access.log', {
    interval: '1d', // rotate daily
    path: logDirectory
})

// setup the logger
app.use(morgan('combined', {
    stream: accessLogStream
}));

//cross origin resourse sharing
app.use(cors());

//body parser
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json({
    limit: '500mb'
}));


//middleware for analytics
app.use(analytical);

// middleware to use for all requests headers
app.use(headers);

//middleware to use for all request session
//app.use(session);

//use api routes
app.use(routes);

//start server and listen on specified port
app.listen(ga.port, ga.ip, ()=>{
    console.log('SPiDER Server is running on port ' + ga.port);
});

mongoose.connection.on('open', ()=>{
    console.log('SPiDER Database is connected');
});

// If the connection throws an error
mongoose.connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err);
    //clearInterval(w3wInterval);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', ()=>{
    mongoose.connection.close(() => {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});