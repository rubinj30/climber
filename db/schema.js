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
    gearNeeded: String,
    photo: String,
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
        enum: ['BOULDERING', 'TRAD CLIMBING', 'SPORT CLIMBING', 'ALPINE CLIMBING', 'ICE CLIMBING']
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
    homeCity: String,
    homeState: String,
    userCreated: {
        type: Date,
        default: Date.now
    },
    sportClimbGrade: {
      type: String,
      default: 'N/A'
    },
    boulderGrade: {
      type: String,
      default: 'N/A'
    },
    tradGrade: {
      type: String,
      default: 'N/A'
    },
    photo: {
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