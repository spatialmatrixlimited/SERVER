var mongoose = require('mongoose');
var UserSchema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;
var userSchema = new UserSchema({
  document_owner: {
    type: ObjectId,
    ref: 'User'
  },
  playerid: {
    type: String,
    default: ''
  },
  avatar: {
    type: String,
    default: ''
  },
  personal: {
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
    },
    gender: {
      type: String,
      default: ''
    }
  },
  organisation: {
    name: {
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
  security: {
    user_type: {
      type: String,
      default: 'Individual'
    },
    role: String,
    is_active: {
      type: Boolean,
      default: false
    },
    accesskey: String,
    accesscode: String
  },
  device: {
    is_available: Boolean,
    is_active: Boolean,
    specification: {
      uuid: String,
      model: String,
      platform: String,
      version: String,
      manufacturer: String,
      is_virtual: String,
      hardware_serial: String
    }
  },
  conversations: [{
    with: String,
    conversationId: String,
    created_on: {
      type: Date,
      default: Date.now
    }
  }],
  documentstatus: {
    type: Number,
    default: 1
  },
  created_on: {
    type: Date
  },
  last_seen: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema, 'users');