
const mongoose = require('mongoose')
const Schema = require('../schema')

const Climb = mongoose.model('Climb', Schema.ClimbSchema)

module.exports = Climb