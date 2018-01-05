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



module.exports = router