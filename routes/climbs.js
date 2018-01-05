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
//                 pageTitle: "Climb"
//             })
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// })

router.get('/new', (request, response) => {
    const userId = request.params.userId
    const destinationId = request.params.destinationId
  
    User.findById(userId)
      .then((user) => {
        const destination = user.destinations.id(destinationId)
  
        response.render('climbs/new', {
          userId,
          destination,
          pageTitle: 'Add Climb'
        })
      })
  })

  module.exports = router