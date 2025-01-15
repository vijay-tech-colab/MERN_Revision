const express = require('express');
const hostRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/path-utils');
const registeredHomes = [];


hostRouter.get('/add-home', (req, res) => {
    // res.sendFile(path.join(rootDir, "views", "add-home.html"));
    res.render('add-home', { pageTitle: 'Add Home' });
});


hostRouter.post('/add-home', (req, res) => {
    // res.sendFile(path.join(rootDir, "views", "home-added.html"));
    res.render('home-added', { pageTitle: 'Home Added' });
    registeredHomes.push(req.body);
    console.log(registeredHomes);
});
// console.log(registeredHomes)

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
