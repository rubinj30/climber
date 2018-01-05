const express = require('express');
const router = express.Router({ mergeParams: true });
const User = require('../db/models/User')
const bodyParser = require('body-parser')

