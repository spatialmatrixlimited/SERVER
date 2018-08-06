var mongoose = require('mongoose');
var PropertySchema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;
var propertySchema = new PropertySchema({
    document_owner: {
        type: ObjectId,
        ref: 'User'
    },
    property: {
        property_id: {
            type: String,
            index: true
        },
        street_id: {
            type: String,
            index: true
        },
        building_serial_number: String,
        master_building_serial_number: { type: String, default: '' },
        building_part_occupied: String,
        ownership_type: String,
        house_number: String,
        street_name: String,
        lga: String,
        state: String,
        country: String,
        site_condition: String,
        site_conditions: [String],
        building_type: [String],
        storey_building: Boolean,
        storey_building_floors: Number,
        building_part_occupied: String,
        water_supply: [String],
        refuse_disposal: String,
        has_signage: Boolean,
        gate_house: Number,
        gate_house_id: String,
        generator_house: Number,
        generator_house_id: String,
        number_of_entity: Number,
        accessible: Boolean
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
        },
    }],
    enumerator: {
        id: {
            type: ObjectId,
            ref: 'User'
        },
        firstname: String,
        lastname: String,
        email: String,
        telephone: String
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
    entities: { type: Number, default: 0 },
    signature: { type: String, default: '' },
    parsed: { type: Boolean, default: false }
});

module.exports = mongoose.model('PropertyRecord', propertySchema, 'properties');