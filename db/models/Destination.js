const mongoose = require('mongoose')
const Schema = require('../schema')

const Destination = mongoose.model('Destination', Schema.DestinationSchema)

module.exports = Destination