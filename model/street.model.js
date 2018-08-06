var mongoose = require('mongoose');
var StreetSchema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var streetSchema = new StreetSchema({
    document_owner: {
        type: ObjectId,
        ref: 'User'
    },
    street: {
        gis_id: String,
        street_id: {
            type: String,
            index: true
        },
        street_name: String,
        street_furniture: [String],
        road_type: String,
        road_condition: String,
        road_carriage: String,
        road_feature: [String],
        refuse_disposal: String,
        drainage: String,
        electricity: String,
        area: String,
        location: String,
        lga: String,
        state: String,
        country: String
    },
    location: {
        type: {
            type: String
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
        },
        whatthreewords: String
    },
    street_photos: [{
        title: String,
        snapshot_position: String,
        url: String,
        location: {
            type: {
                type: String
            },
            coordinates: {
                type: [Number],
                index: '2dsphere'
            },
            whatthreewords: String
        }
    }],
    enumerator: {
        id: {
            type: ObjectId,
            ref: 'User'
        },
        firstname: String,
        lastname: String,
        email: String,
        mobile: String
    },
    document_status: {
        type: Number,
        default: 0
    },
    created: {
        type: Date
    },
    modified: {
        type: Date,
        default: Date.now
    },
    modified_by: {
        id: {
            type: ObjectId,
            ref: 'User'
        },
        firstname: String,
        lastname: String,
        email: String,
        mobile: String
    },
    properties: {
        type: Number,
        default: 0
    },
    signature: { type: String, default: '' },
    parsed: { type: Boolean, default: false }
});

module.exports = mongoose.model('StreetRecord', streetSchema, 'streets');