const mongoose = require('mongoose')
const Schema = mongoose.Schema

console.log("hello?")
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
    location: String,
    typeOfClimbing: {
        type: String,
        // Danny suggested radio buttons
        enum: ['BOULDERING', 'TRAD CLIMBING', 'SPORT CLIMBING', 'ALPINE CLIMBING', 'ICE CLIMBING']
    },
    indoorOrOutdoor: String,
    description: {
        type: String
    },
    // direction: String,
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
      type: String
      // required: [ true, 'Username is required' ]
    },
    email: String,
    age: Number,
    gender: String,
    livesIn: String,
    userCreated: {
        type: Date,
        default: Date.now
    },
    likesToClimb: String,
    // sportClimbGrade: {
    //   type: String,
    //   default: 'N/A'
    // },
    // boulderGrade: {
    //   type: String,
    //   default: 'N/A'
    // },
    // tradGrade: {
    //   type: String,
    //   default: 'N/A'
    // },
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