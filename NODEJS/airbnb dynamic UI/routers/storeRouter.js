const express = require('express');
const storeRouter = express.Router();
const path = require('path');   
const rootDir = require('../utils/path-utils');
const {registeredHomes} = require('./hostRouter');


storeRouter.get('/',(req, res, next) => {
    // console.log("main",require.main.filename);
    console.log("home page",registeredHomes);
    // res.sendFile(path.join(rootDir, "views", "index.html"));
    res.render('index', { pageTitle: 'Home', homes : registeredHomes });
});




module.exports = storeRouter;
