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
        username: 'AdOndraZilla',
        email: 'adam@me.com',
        age: 25,
        gender: 'Male',
        livesIn: 'Marietta, GA',
        likesToClimb: 'Sport',

        // sportClimbGrade: '5.15',
        // tradGrad: '5.14',
        // boulderGrade: 'V16',
    photo: 'http://www.montura.it/file_public/persone_persona_photogallery/121/image/3.jpg'
    })
    const boatRock = new Destination({
        name: 'Boat Rock',
        city: 'Atlanta',
        state: 'GA',
        location: '33.72, -84.562',
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
        location: '34.18, -85.817',
        city: 'Steele',
        state: 'AL',
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
        age: 50,
        gender: 'Female',
        livesIn: 'Jasper, GA',
        likesToClimb: 'Traditional',
        // sportClimbGrade: '5.14',
        // boulderGrade: 'V13',
        photo: 'https://i.imgur.com/BveJhPw.jpg'
    })
    const redRiver = new Destination({
        name: 'Red River Gorge',
        city: 'Stanton',
        state: 'KY',
        location: '37.784, -83.682',
        type: 'Traditional and Sport Climbing',
        description: 'One of the best climbing destinations in the country with endless amounts of Traditional and Sport climbing routes'
    })
    const amarillo = new Climb({
        name: 'Amarillo Sunset',
        type: 'Sport Climbing',
        grade: '5.11b',
        completed: true,
        gearNeeded: '8 quickdraws and anchors',
        photo: 'https://cdn-files.apstatic.com/climb/107404089_medium_1494186810.jpg'
    })
    redRiver.climbs.push(amarillo)

    const leda = new Destination({
        name: 'Leda',
        city: 'Chattanooga',
        state: 'TN',
        location: '35.236, -85.227',
        type: 'Traditional and Sport Climbing',
        description: 'Roadside crag along the winding roads of Chattanooga. It is mostly Sport climbing with some Traditional mixed in.'
    })
    const speedwayBoogie = new Climb({
        name: 'Speedway Boogie',
        type: 'Sport Climbing',
        grade: '5.10b',
        completed: false,
        gearNeeded: '6 quickdraws and anchors',
        photo: 'https://cdn-files.apstatic.com/climb/108776037_large_1494295828.jpg'
    })
    leda.climbs.push(speedwayBoogie)
    lynnHill.destinations.push(redRiver, leda)
    return lynnHill.save()

}).catch((err) => {
    console.log(`*** ERROR SEEDING DATA ${err}`)
}).then(() => {
    mongoose.connection.close()
    console.log(`
    Finished seeding the database
    
    Disconnected from Mongo DB`)
})