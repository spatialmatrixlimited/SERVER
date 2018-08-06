var mongoose = require('mongoose');
var EntitySchema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var entitySchema = new EntitySchema({
    document_owner: {
        type: ObjectId,
        ref: 'User'
    },
    property_id: {
        type: String,
        index: true
    },
    entity: {
        entity_id: String,
        entity_name: String,
        entity_group: String,
        entity_categories: [String],
        meter_available: Boolean,
        meter_condition: String,
        meter_phases: String,
        meter_type: String,
        meter_number: String,
        has_signage: Boolean,
        entity_detail: {
            type: EntitySchema.Types.Mixed,
            default: {}
        }
    }, 
    contact: {
        contact_person: String,
        email: String,
        telephone: String
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
    property_photos: [{
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
    signature: { type: String, default: '' },
    parsed: { type: Boolean, default: false }
});

module.exports = mongoose.model('EntityRecord', entitySchema, 'entities');