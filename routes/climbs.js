const express = require('express');
const router = express.Router({ mergeParams: true });
const User = require('../db/models/User')
const Destination = require('../db/models/Destination')
const bodyParser = require('body-parser')

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
    console.log(`destination id from GET ------ ${destinationId}`)
    const climbId = request.params.climbId
    console.log(`climb ID ----- ${climbId}`)
    User.findById(userId)
        .then((user) => {
            const destination = user.destinations.id(destinationId)
            const climb = destination.climbs.id(climbId)
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

router.get('/:climbId/edit', (request, response) => {
    const userId = request.params.userId
    const destinationId = request.params.destinationId
    const climbId = request.params.climbId
    console.log(`user ---- ${climbId}`)
    User.findById(userId)
        .then((user) => {
            const destination = user.destinations.id(destinationId)
            const climb = destination.climbs.id(climbId)
            console.log(`CLIMB ----- ${climb}`)
            response.render('climbs/edit', {
                user,
                destination,
                climb,
                pageTitle: 'Update Climb'
            })
        })
        .catch((error) => {
            console.log(error)
      })
  })

router.put('/:climbId', (request, response) => {
    const userId = request.params.userId
    const destinationId = request.params.destinationId
    const climbId = request.params.climbId
    const updatedClimbInfo = request.body
    console.log(request.body)
    User.findById(userId)
        .then((user) => {
            const destination = user.destinations.id(destinationId)
            const climb = destination.climbs.id(climbId)
            console.log(climb)
            climb.name =  updatedClimbInfo.name
            climb.grade =  updatedClimbInfo.grade
            climb.gearNeeded =  updatedClimbInfo.gearNeeded
            climb.description = updatedClimbInfo.description
            climb.photo = updatedClimbInfo.photo
            climb.type = updatedClimbInfo.type
            climb.completed = updatedClimbInfo.completed
            return user.save()         
            console.log(user)
    }).then(() => {
        response.redirect(`/users/${userId}/destinations/${destinationId}/climbs/${climbId}`)
    }).catch((err) => {
        console.log(err)
    })
})

router.get('/:climbId/delete', (request, response) => {
    const userId = request.params.userId
    const destinationId = request.params.destinationId
    const climbId = request.params.climbId
    console.log(`climb id = ${climbId}`)
    User.findById(userId)
        .then((user) => {
            const destination = user.destinations.id(destinationId)
            const climb = destination.climbs.id(climbId)
            console.log(`climb id = ${climb}`)
            climb.remove()
            return user.save()
        }).then(() => {
            response.redirect(`/users/${userId}/destinations/${destinationId}`)
        }).catch((err) => {
            console.log(err)
        })    
})

module.exports = router