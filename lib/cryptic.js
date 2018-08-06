'use strict';
var crypto = require('crypto');
const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var genRandomString = (length)=>{
    return crypto.randomBytes(Math.ceil(length/2))
            .toString('hex') /** convert to hexadecimal format */
            .slice(0,length);   /** return required number of characters */
};

var hashPassword = (password, salt)=>{
    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    var value = hash.digest('hex');
    return {
        salt:salt,
        hashed:value
    };
};

var saltHashPassword = (userpassword)=>{
    var salt = genRandomString(16); /** Gives us salt of length 16 */
    var passwordData = hashPassword(userpassword, salt);
    return {hash : passwordData.hashed, salt : passwordData.salt};
}

var codeGen=()=>{
    var text='AL-';
    var len = 6;
    for( var i=0; i < len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
}

var invoiceCodeGen=()=>{
    var text='INV-';
    var len = 6;
    for( var i=0; i < len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
}

var peopleCodeGen=()=>{
    var text='';
    var len = 8;
    for( var i=0; i < len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
}

var rewardsCodeGen=()=>{
    var text='RWD-';
    var len = 8;
    for( var i=0; i < len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
}

var bookingCodeGen=()=>{
    var text='BKN-';
    var len = 8;
    for( var i=0; i < len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
}

var companyCodeGen=()=>{
    var text='BOSS-';
    var len = 8;
    for( var i=0; i < len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
}

exports.companyCodeGen = companyCodeGen;
exports.bookingCodeGen = bookingCodeGen;
exports.rewardsCodeGen = rewardsCodeGen;
exports.codeGen = codeGen;
exports.invoiceCodeGen = invoiceCodeGen;
exports.peopleCodeGen = peopleCodeGen;
exports.hashPassword = hashPassword;
exports.saltHashPassword = saltHashPassword;
