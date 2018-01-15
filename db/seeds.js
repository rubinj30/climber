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
    const deanO = new User({
        username: 'Ad-Ondra',
        email: 'adam@me.com',
        age: 35,
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
        photo: 'https://i.imgur.com/Ubn8zb4.jpg'
    })
    const wavesInMotion = new Climb({
        name: 'Waves in Motion',
        type: 'Boulder',
        grade: 'V3',
        completed: 'Yes',
        gearNeeded: 'Crash pad',
        photo: 'https://i.imgur.com/16MLwFr.jpg',
        description: 'Fun climb up small footholds. Watch out for the sketchy landing!'
    })
    const yellowArete = new Climb({
        name: 'Yellow Arete',
        type: 'Boulder',
        grade: 'V4',
        completed: 'Yes',
        gearNeeded: 'Crashpad',
        photo: 'https://i.imgur.com/RrZOBgb.jpg',
        description: 'Yellow Wall Area. Tall arete on the backside of Yellow Wall. You can\'t miss it. Lorem ipsumm lorem ipsum.'
    })
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
        completed: 'Yes',
        gearNeeded: '7 quickdraws and anchors',
        photo: 'https://cdn-files.apstatic.com/climb/112894410_large_1494625777.jpg',
        description: 'A classic single-pitch route that starts with a boulder problem, and ends with\
    a long face climb'
    })
    sandRock.climbs.push(misty)
    const stoneSummit = new Destination({
        name: 'Stone Summit',
        city: 'Atlanta',
        state: 'GA',
        location: '33.88, -84.27',
        typeOfClimbing: 'Indoor bouldering, top-rope and sport climbing',
        description: 'One of the largest climbing gyms in the country, filled with massive walls and endless amounts of boulder problems.\
        There is also a full gym, yoga studio, day care, and probably even a basketball court.',
        photo: 'http://pointsnorthatlanta.com/wp-content/uploads/2015/06/Stone-Summit-3.jpg'
    })
    const blueRoute = new Climb({
        name: 'Blue Route',
        type: 'Boulder',
        grade: 'V6',
        completed: 'Haven\t tried it',
        gearNeeded: 'None',
        photo: 'http://www.ssclimbing.com/docs/2015/kennesaw/04.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

    })
    const redProblem = new Climb({
        name: 'Problem # 2',
        type: 'Boulder',
        grade: 'V8',
        completed: 'Not yet but I\'m working on it',
        gearNeeded: 'None',
        photo: 'http://www.ssclimbing.com/docs/2015/kennesaw/04.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    })
    stoneSummit.climbs.push(blueRoute, redProblem)
    adamOndra.destinations.push(boatRock, sandRock, stoneSummit)
    return adamOndra.save()
}).then(() => {
    const lynnHill = new User({
        username: 'Lynn-Duh',
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
        completed: 'Not yet but I\'m working on it',
        gearNeeded: '8 quickdraws and anchors',
        photo: 'https://cdn-files.apstatic.com/climb/107404089_medium_1494186810.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    })
    const goldenTicket = new Climb({
        name: 'Golden Ticket',
        type: 'Sport Climbing',
        grade: '5.14c',
        completed: 'Yes',
        gearNeeded: '10 quickdraws and anchors',
        photo: 'https://i.imgur.com/EbEP5tU.png',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    })    
    redRiver.climbs.push(goldenTicket, amarillo)
    const redRocks = new Destination({
        name: 'Red Rock National Park',
        city: 'Las Vegas',
        state: 'NV',
        location: '36.131, -115.425',
        completed: 'Haven\'t tried it yet',
        type: 'Traditional and Sport Climbing',
        description: 'A few thousand routes, generally warm weather, every kind climbing from short sport routes to big 20-pitch outings, nearby Las Vegas for off-rock activities. Who could ask for more?',
        photo: 'https://i.imgur.com/eqgoFeX.jpg'
    })
    const cuttingEdge = new Climb({
        name: 'Cutting Edge',
        type: 'Boulder',
        grade: 'V5',
        completed: 'Haven\'t tried it yet',
        gearNeeded: 'Standard Trad rack',
        photo: 'https://i.imgur.com/2gjioIN.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    })
    const something = new Climb({
        name: 'Waterworld',
        type: 'Sport Climbing',
        grade: '5.12b',
        completed: 'Yes',
        gearNeeded: '9 quickdraws and anchors',
        photo: 'https://cdn-files.apstatic.com/climb/111115198_large_1494340342.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
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
        completed: 'Yes',
        gearNeeded: '6 quickdraws and anchors',
        photo: 'https://cdn-files.apstatic.com/climb/106392755_medium_1494104543.jpg'
    })
    leda.climbs.push(speedwayBoogie)
    lynnHill.destinations.push(redRiver, redRocks, leda)
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
        photo: 'https://i.imgur.com/OS8KXUa.png'
    })
    const yosemite = new Destination({
        name: 'Yosemite National Park',
        city: 'Yosemite',
        state: 'CA',
        location: '37.74, -119.573',
        type: 'Traditional, Sport Climbing, and Bouldering',
        description: 'Yosemite Valley is THE PLACE for many rock climbers. A literal mecca for climbers across the globe,\
        the crags and walls of "The Valley" see thousands of climber-days in the course of a year. During the height of \
        the season, it\'s typical to hear climbers on El Capitan yelling back and forth in English, German, Japanese, Russian \
        and many other languages. In this one place, many factors come together to form a nearly perfect arena for rock climbing;\
        mild weather, beautiful scenery, and incredible granite walls perfectly suited to climbing. On a rest day, visit the many\
        tremendous waterfalls, hike some of the beautiful trails, and breathe in one of the most incredible places in the entire country.',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Yosemite_Valley_observation.jpg'
    })
    sam.destinations.push(yosemite)
    return sam.save()
}).then(() => {
    const margo = new User({
        username: "margo-jain",
        email: 'margo@something.com',
        age: 21,
        gender: 'Female',
        livesIn: 'Suwanee, GA',
        likesToClimb: 'Sport',
        climbingPartnerStatus: 'In open climbing partnership',
        skillLevel: 'Advanced',
        photo: 'https://i.imgur.com/UQpIGfj.png'
    })

    const joshuaTree = new Destination({
        name: 'Joshua Tree',
        city: 'Palm Springs',
        state: 'CA',
        location: '33.88, -116.227',
        type: 'Traditional and Sport Climbing',
        description: 'Joshua Tree is a world famous area with thousands of routes, countless boulder problems and a very limited number of campsites.',
        photo: 'https://i.imgur.com/ze5DMb5.png'
    })

    const someRoute = new Climb({
        name: 'Funtown',
        type: 'Sport',
        grade: '5.13b',
        completed: 'Yes',
        gearNeeded: '8 quickdraws and anchors',
        photo: 'https://i.imgur.com/8R9UiDl.png',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    })

    joshuaTree.climbs.push(someRoute)
    margo.destinations.push(joshuaTree)
    return margo.save()
}).catch((err) => {
    console.log(`*** ERROR SEEDING DATA ${err}`)
}).then(() => {
    mongoose.connection.close()
    console.log(`
    Finished seeding the database
    
    Disconnected from Mongo DB`)
})