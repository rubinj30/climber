const express = require('express');
const router = express.Router({ mergeParams: true });
const User = require('../db/models/User')
// const Destination = require('../db/models/Destination')
const bodyParser = require('body-parser')

router.get('/', (request, response) => {
    const userId = request.params.userId
    
    User.findById(userId)   
        .then((user) => {
            response.render('destinations/index', {
                userId: user._id,
                username: user.username,
                destinations: user.destinations,
                pageTitle: "Climbing Destinations"
            })
        })
        .catch((err) => {
            console.log(err)
        })
})

router.get('/new', (request, response) => {
    const userId = request.params.userId
    console.log(`USER ID ----- ${userId}`)
    User.findById(userId)
        .then((user) => {
            response.render('destinations/new', {
                user,
                pageTitle: "Add Climbing Destination"
        })
    })
})


router.get('/:destinationId', (request, response) => {
    const destinationId = request.params.destinationId
    console.log(`destination id from GET ------ ${destinationId}`)
    const userId = request.params.userId
    console.log(`user id from GET ------ ${userId}`)
    User.findById(userId)
        .then((user) => {
            console.log(user)
            const destination = user.destinations.id(destinationId) /// how do i get destination into a variable
            response.render('destinations/show', {
                user,
                destination,
                pageTitle: "Climbing Destination"
            })
        })
        .catch((err) => {
            console.log(err)
        })
})

router.post('/', (request, response) => {
    const userId = request.params.userId
    const newDestination = request.body
  
    User.findById(userId)
      .then((user) => {
        user.destinations.push(newDestination)
        return user.save()
      })
      .then(() => {
        response.redirect(`/users/${userId}/destinations`)
      })
      .catch((error) => {
        console.log(error)
   })
  
})

router.get('/:destinationId/delete', (request, response) => {
    const userId = request.params.userId
    console.log(`user id from Delete ------ ${userId}`)
    const destinationId = request.params.destinationId
    console.log(`destination id from Delete ------ ${destinationId}`)
    User.findById(userId)
        .then((user) => {
            console.log(user)
            const destination = user.destinations.id(destinationId)
            destination.remove()
            return user.save()
        }).then(() => {
            response.redirect(`/users/${userId}/destinations`)
        }).catch((err) => {
            console.log(err)
        })
})

module.exports = router