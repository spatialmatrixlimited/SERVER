module.exports=function(req, res, next) {
    // do logging
    /*var agent = "user-agent";
    console.log(req.headers['user-agent']);
    console.log(req.headers.host);
    console.log('Something is happening.');
    */
    res.header('access-control-allow-origin','*');
    res.header('access-control-allow-methods','GET, POST, PUT, PATCH, DELETE');
    res.header('access-control-allow-headers','Orgin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
};
