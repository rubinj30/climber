const express = require('express');
const router = express.Router({ mergeParams: true });
const User = require('../db/models/User')
const Destination = require('../db/models/Destination')
const bodyParser = require('body-parser')

// router.get('/', (request, response) => {
//     const userId = request.params.userId
    
//     User.findById(userId)   
//         .then((user) => {
//             const destination = user.destinations.id(destinationId)

//             response.render('gifts/index', {
//                 userId: user._id,
//                 username: user.username,
//                 destinations: user.destinations,
//                 pageTitle: "Climbs"
//             })
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// })

router.get('/new', (request, response) => {
    const userId = request.params.userId
    const destinationId = request.params.destinationId
    console.log(`user id ------ ${userId}`)
    User.findById(userId)
      .then((user) => {
        const destination = user.destinations.id(destinationId)
  
        response.render('climbs/new', {
          user,
          destination,
          pageTitle: 'Add Climb'
        })
      })
  })

router.get('/:climbId', (request, response) => {
    const userId = request.params.userId
    const destinationId = request.params.destinationId
    const climbId = request.params.climbId
    User.findById(userId)
        .then((user) => {
            const destination = user.destinations.id(destinationId)
            const climb = destination.id(climbId)
            console.log(`climb ---- ${climb}`)
            response.render('climbs/show', {
                user,
                destination,
                climb
            })
        })
})


router.post('/', (request, response) => {
    const userId = request.params.userId
    console.log(`user id ------ ${userId}`)
    const destinationId = request.params.destinationId
    console.log(`destionation id ------ ${destinationId}`)
    const newClimb = request.body
    console.log(`new climb id ------ $`)
    
    User.findById(userId)
        .then((user) => {
            const destination = user.destinations.id(destinationId)
            destination.climbs.push(newClimb)
            return user.save()
        }).then(() => {
            response.redirect(`/users/${userId}/destinations/${destinationId}`)
        }).catch((err) => {
            console.log(err)
        })
})

// router.get('/:climbId/delete', (request, response) => {
//     const userId = request.params.userId
//     const destinationId = request.params.destinationId
// })

module.exports = router