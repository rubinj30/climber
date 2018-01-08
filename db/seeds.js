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
        climbingPartnerStatus: 'Looking for climbing partner(s)',
        likesToClimb: 'Sport',
        skillLevel: 'Beginner',

        // sportClimbGrade: '5.15',
        // tradGrad: '5.14',
        // boulderGrade: 'V16',
    photo: 'https://i.imgur.com/NbV0SnR.jpg'
    })
    const boatRock = new Destination({
        name: 'Boat Rock',
        city: 'Atlanta',
        state: 'GA',
        location: '33.72, -84.562',
        typeOfClimbing: 'Bouldering',
        description: 'Small boulder field with sharp granite boulders nestled in a metro-Atlanta neighborhood',
        photo: 'https://cdn-files.apstatic.com/climb/106081440_medium_1494076517.jpg'
    })
    const wavesInMotion = new Climb({
        name: 'Waves in Motion',
        type: 'Boulder',
        grade: 'V3',
        completed: false,
        gearNeeded: 'Crash pad',
        photo: 'http://gripped.com/wp-content/uploads/2015/04/jo.jpg'
    })
    const yellowArete = new Climb({
        name: 'Yellow Arete',
        type: 'Boulder',
        grade: 'V4',
        completed: true,
        gearNeeded: 'Crashpad',
        photo: 'https://i.imgur.com/RrZOBgb.jpg'
    })
    // const keeper = 
    boatRock.climbs.push(wavesInMotion, yellowArete)
    const sandRock = new Destination({
        name: 'Sand Rock',
        location: '34.18, -85.817',
        city: 'Steele',
        state: 'AL',
        typeOfClimbing: 'Sport Climbing',
        description: 'Accessible single-pitch sport climbing',
        photo: 'https://i.pinimg.com/originals/b4/35/d8/b435d8d6b70c19848d7ac73e2546049a.jpg'
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
    const stoneSummit = new Destination({
        name: 'Stone Summit',
        city: 'Atlanta',
        state: 'GA',
        location: '33.88, -84.27',
        typeOfClimbing: 'Indoor bouldering, top-rope and sport climbing',
        description: 'One of the largest climbing gyms in the country, filled with massive walls and endless amounts of boulder problems.',
        photo: 'http://pointsnorthatlanta.com/wp-content/uploads/2015/06/Stone-Summit-3.jpg'
    })
    const blueRoute = new Climb({
        name: 'Blue Route',
        type: 'Boulder',
        grade: 'V6',
        completed: false,
        gearNeeded: 'None',
        photo: 'http://www.ssclimbing.com/docs/2015/kennesaw/04.jpg'

    })
    stoneSummit.climbs.push(blueRoute)
    adamOndra.destinations.push(boatRock, sandRock, stoneSummit)
    return adamOndra.save()
}).then(() => {
    const lynnHill = new User({
        username: 'Lynn-Duhhh',
        email: 'lynn@gmail.com',
        age: 52,
        gender: 'Female',
        livesIn: 'Jasper, GA',
        likesToClimb: 'Traditional',
        climbingPartnerStatus: 'In committed climbing partnership',
        skillLevel: 'Advanced',
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
        completed: false,
        gearNeeded: '8 quickdraws and anchors',
        photo: 'https://cdn-files.apstatic.com/climb/107404089_medium_1494186810.jpg'
    })
    const goldenTicket = new Climb({
        name: 'Golden Ticket',
        type: 'Sport Climbing',
        grade: '5.14c',
        completed: true,
        gearNeeded: '10 quickdraws and anchors',
        photo: 'http://rockandice.com/wp-content/uploads/2017/09/Michaela-GT-web.jpg'
    })    
    redRiver.climbs.push(goldenTicket, amarillo)
    const redRocks = new Destination({
        name: 'Red Rock National Park',
        city: 'Las Vegas',
        state: 'NV',
        location: '36.131, -115.425',
        type: 'Traditional and Sport Climbing',
        description: 'A few thousand routes, generally warm weather, every kind climbing from short sport routes to big 20-pitch outings, nearby Las Vegas for off-rock activities. Who could ask for more?',
        photo: 'https://i.imgur.com/eqgoFeX.jpg'
    })
    const cuttingEdge = new Climb({
        name: 'Cutting Edge',
        type: 'Trad Climbing',
        grade: '5.11c',
        completed: false,
        gearNeeded: 'Standard Trad rack',
        photo: 'https://imgur.com/327bb4a7-1925-45dd-9aff-4034eb67b260'
    })
    const something = new Climb({
        name: 'Waterworld',
        type: 'Sport Climbing',
        grade: '5.12b',
        completed: true,
        gearNeeded: '9 quickdraws and anchors',
        photo: 'https://cdn-files.apstatic.com/climb/111115198_large_1494340342.jpg'
    })

    redRocks.climbs.push(cuttingEdge, something)
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
        photo: 'https://cdn-files.apstatic.com/climb/106392755_medium_1494104543.jpg'
    })
    leda.climbs.push(speedwayBoogie)
    lynnHill.destinations.push(redRiver, leda)
    return lynnHill.save()
}).then(() => {
    const sam = new User({
        username: "Yosemite Sam",
        email: 'sam@something.com',
        age: 24,
        gender: 'Male',
        livesIn: 'Atlanta, GA',
        likesToClimb: 'All of it',
        climbingPartnerStatus: 'In open climbing partnership',
        skillLevel: 'Advanced',
        photo: 'https://i.imgur.com/wp0vhTP.jpg'
    })
    const margo = new User({
        username: "margo-jain",
        email: 'margo@something.com',
        age: 21,
        gender: 'Female',
        livesIn: 'Suwanee, GA',
        likesToClimb: 'Sport',
        climbingPartnerStatus: 'In open climbing partnership',
        skillLevel: 'Advanced',
        photo: 'https://i.imgur.com/ffUPQ34.jpg'
    })
    return sam.save()

}).catch((err) => {
    console.log(`*** ERROR SEEDING DATA ${err}`)
}).then(() => {
    mongoose.connection.close()
    console.log(`
    Finished seeding the database
    
    Disconnected from Mongo DB`)
})