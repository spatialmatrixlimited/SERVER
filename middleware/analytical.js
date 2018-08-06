var Analytical = require('../model/impressions.analytical.model');

module.exports = function (req, res, next) {
    var newData = Analytical({
        traffic: req.headers
    });
    newData.save((err, data) => {
        //console.log('STORED',data);
    });

    next();
};