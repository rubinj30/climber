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
    grade: String,
    funRating: String,
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
    city: String,
    cragType: String,
    state: String,
    latitude: String,
    longitude: String,
    typeOfClimbing: {
        type: String,
        // Danny suggested radio buttons
        enum: ['BOULDER', 'TRAD', 'SPORT', 'ALPINE', 'ICE']
    },
    indoorOrOutdoor: String,
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
    email: String,
    firstName: String,
    lastName: String,
    age: Number,
    gender: String,
    homebase: String,
    userCreated: {
        type: Date,
        default: Date.now
    },
    sportClimbGrade: String,
    boulderGrade: String,
    tradGrade: String,
    userPhoto: {
      type: String,
      default: 'https://goo.gl/yYQiTT'
    },
    destinations: [ DestinationSchema ]
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