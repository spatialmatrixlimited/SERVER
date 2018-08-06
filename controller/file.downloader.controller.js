let fs = require('fs');
let request = require('request');

let download = (uri, filename, callback) => {
    request.head(uri, function (err, res, body) {
        if (err) {
            callback(err, filename)
        } else {
            let stream = request(uri);
            stream.pipe(
                    fs.createWriteStream(filename)
                    .on('error', (err) => {
                        callback(error, filename);
                        stream.read();
                    })
                )
                .on('close', () => {
                    callback(null, filename);
                });
        }
    });
};

let fileDownloader = {

    /****************************************************************************************
        DOWNLOADER
    ****************************************************************************************/

    //Authenticate user
    download: (req, res) => {
        download('https://www.google.com/images/srpr/logo3w.png', 'google.png', (err, file_data)=>{
            console.log('done');
        });

    }



}

module.exports = fileDownloader;