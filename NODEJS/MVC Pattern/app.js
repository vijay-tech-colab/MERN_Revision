const express = require('express');
const app = express();
const port = 3000;
const {hostRouter} = require('./routers/hostRouter');
const storeRouter = require('./routers/storeRouter');
const path = require('path');
const rootDir = require('./utils/path-utils');
const { get404 } = require('./controllers/errorController');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());  
app.use(express.static(path.join(rootDir, 'public')));

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(storeRouter);
app.use(hostRouter);


// 404 Not Found ?
app.use(get404);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});