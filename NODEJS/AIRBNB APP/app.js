const express = require('express');
const app = express();
const port = 3000;
const hostRouter = require('./routers/hostRouter');
const storeRouter = require('./routers/storeRouter');
const path = require('path');
const rootDir = require('./utils/path-utils');
app.use(express.json());
app.use(express.urlencoded({extended : true}));  
app.use(express.static(path.join(rootDir, 'public')));

app.use(storeRouter);
app.use(hostRouter);


// 404 Not Found ?
app.use((req,res,next) =>{
    res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});