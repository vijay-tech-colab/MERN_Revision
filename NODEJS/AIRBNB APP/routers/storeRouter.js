const express = require('express');
const storeRouter = express.Router();
const path = require('path');   
const rootDir = require('../utils/path-utils');


storeRouter.get('/',(req, res, next) => {
    console.log("main",require.main.filename);
    res.sendFile(path.join(rootDir, "views", "index.html"));
});




module.exports = storeRouter;
