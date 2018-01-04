const express = require('express');
const router = express.Router();
const User = require('../db/models/User')

/* GET users listing. */
router.get('/', (request, response) => {
  User.find({})
    .then((users) => {
      response.render('users/index', {
        users,
        pageTitle: 'Climbers'
      })
    })
    .catch((error) => {
      console.log(error)
    })
})

router.get('/new', (request, response) => {
  response.render('users/new', { pageTitle: 'New User' })
})





module.exports = router;
