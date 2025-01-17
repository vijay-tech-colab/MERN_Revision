const express = require('express');
const storeRouter = express.Router();
const path = require('path');   
const rootDir = require('../utils/path-utils');
const { getHome } = require('../controllers/storeController');


storeRouter.get('/',getHome);




module.exports = storeRouter;
