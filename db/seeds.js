require('dotenv').config()

const User = require('./models/User')
const Destination = require('./models/Destination')
const Climb = require('./models/Climb')

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.once('open', () => {
    console.log('connected to Mongo DB!')
})

mongoose.connection.on('error', (error) => {
    console.error(`Mongo DB connection error: ${error}`)
    process.exit(-1)
})

User.remove({}).then(() => {
    const adamOndra = new User({
        username: 'ondrazilla',
        email: 'adam@me.com',
        firstName: 'Adam',
        lastName: 'Ondra',
        age: 25,
        gender: 'male',
        homeCity: 'Marietta',
        homeState: 'GA',
        userCreated: Date.now,
        userPhoto: 'http://www.telegraph.co.uk/content/dam/news/2016/11/23/adam-ondra-instagram_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=450'
    })
    const boatRock = new Destination({
        name: 'Boat Rock', 
        city: 'Atlanta',
        state: 'GA',
        latitude: 33.72,
        longitude: -84.562,
        typeOfClimbing: 'Bouldering',
        description: 'Small boulder field with sharp granite boulders nestled in a metro-Atlanta neighborhood'
    })
})