const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const ClimbSchema = new Schema(
  {
    name: {
      type: String,
      required: [ true, 'Name of the climb is required' ]
    },
    type: {
      type: String
    },
    grade: {
      type: String
    },
    funRating: {
      type: String
    },
    completed: Boolean,
    gearNeeded: [],
    photos: [],
  },
  {
    timestamps: {}
  }
)

const DestinationSchema = new Schema(
  {
    name: {
      type: String,
      required: [ true, 'Destination name is required' ]
    },
    city: {
      type: String
    },
    state: {
        type: String
    },
    latitude: {
        type: String
    },
    longitude: {
        type: String
    },
    typeOfClimbing: String,
    description: {
        type: String
    },
    description: {
        type: String
    },
    climbs: [ ClimbSchema ]
  },
  {
    timestamps: {},
    usePushEach : true
  }
)

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: [ true, 'Username is required' ],
      unique: [ true, 'Username must not already be in use']
    },
    email: {
      type: String
    },
    firstName: {
      type: String,
      required: [ true, 'First name is required!' ]
    },
    lastName: {
      type: String,
      required: [ true, 'Last name is required!' ]
    },
    photoUrl: {
      type: String,
      default: 'https://cdn.vectorstock.com/i/thumb-large/66/69/santa-hat-vector-296669.jpg'
    },
    stores: [ StoreSchema ]
  },
  {
    timestamps: {},
    usePushEach: true
  }
)

module.exports = {
  UserSchema,
  DestinationSchema,
  ClimbSchema
}