const express = require('express');
const hostRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/path-utils');
const { getAddHome, postAddHome } = require('../controllers/hostController');



hostRouter.get('/add-home', getAddHome);
hostRouter.post('/add-home', postAddHome);
// console.log(registeredHomes)

exports.hostRouter = hostRouter;