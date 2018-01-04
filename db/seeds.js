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
        gender: 'Male',
        homeCity: 'Marietta',
        homeState: 'GA',
        sportClimbGrade: '5.15',
        tradGrad: '5.14',
        boulderGrade: 'V16',
        photo: 'http://www.telegraph.co.uk/content/dam/news/2016/11/23/adam-ondra-instagram_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=450'
    })
    const boatRock = new Destination({
        name: 'Boat Rock', 
        city: 'Atlanta',
        state: 'GA',
        latitude: 33.72,
        longitude: -84.562,
        typeOfClimbing: 'Bouldering'.toUpperCase(),
        description: 'Small boulder field with sharp granite boulders nestled in a metro-Atlanta neighborhood'
    })
    const wavesInMotion = new Climb({
        name: 'Waves in Motion',
        type: 'Boulder',
        grade: 'V3',
        completed: false,
        gearNeeded: 'Crash pad',
        photo: 'https://cdn-files.apstatic.com/climb/108707832_medium_1494293772.jpg'
    })
    const yellowArete = new Climb({
        name: 'Yellow Arete', 
        type: 'Boulder',
        grade: 'V4',
        completed: true,
        gearNeeded: 'Crashpad',
        photo: 'https://cdn-files.apstatic.com/climb/108707832_medium_1494293772.jpg'
    })
    boatRock.climbs.push(wavesInMotion, yellowArete)
    const sandRock = new Destination({
        name: 'Sand Rock',
        city: 'Steele',
        state: 'AL',
        latitude: '34.18',
        longitude: '-85.817',
        typeOfClimbing: 'Sport Climbing'.toUpperCase(),
        description: 'Accessible single-pitch sport climbing'
    })
    const misty = new Climb({
        name: 'Misty',
        type: 'Sport Climbing',
        grade: '5.10b',
        completed: true,
        gearNeeded: '7 quickdraws and anchors',
        photo: 'https://cdn-files.apstatic.com/climb/112894410_large_1494625777.jpg'
    })
    sandRock.climbs.push(misty)
    adamOndra.destinations.push(boatRock, sandRock)
    return adamOndra.save()    
}).then(() => {
    const lynnHill = new User({
        username: 'lynnster',
        email: 'lynn@gmail.com',
        homeCity: 'Jasper',
        homeState: 'GA',
        sportClimbGrade: '5.14',
        boulderGrade: 'V13',
        photo: 'https://cdn-files.apstatic.com/climb/109451567_medium_1494350546.jpg'     
    })
    return lynnHill.save()

}).catch((err) => {
    console.log(`*** ERROR SEEDING DATA ${err}`)
}).then(() => {
    mongoose.connection.close()
    console.log(`
    Finished seeding the database
    
    Disconnected from Mongo DB`)
})