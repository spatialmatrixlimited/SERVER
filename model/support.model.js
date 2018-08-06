var mongoose = require('mongoose');
var SupportSchema = mongoose.Schema;
var supportSchema = new SupportSchema({
    message: {
        type: String,
        default: ''
    },
    user: {
        id: {
            type: String,
            default: ''
        },
        firstname: {
            type: String,
            default: ''
        },
        lastname: {
            type: String,
            default: ''
        },
        email: {
            type: String,
            lowercase: true,
            default: ''
        },
        mobile: {
            type: String,
            default: ''
        }
    },
    device: {
        uuid: String,
        model: String,
        platform: String,
        version: String,
        manufacturer: String,
        is_virtual: String,
        hardware_serial: String
    },
    location: {
        type: {
            type: String
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
        }
    },
    document_status: {
        type: Number,
        default: 1
    },
    created: {
        type: Date
    }
});

module.exports = mongoose.model('Support', supportSchema, 'support');