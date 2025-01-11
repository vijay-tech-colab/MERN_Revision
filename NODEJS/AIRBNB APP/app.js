const express = require('express');
const app = express();
const port = 3000;
app.use(express.urlencoded({extended : true}));

app.use((req, res, next) => {
    console.log("Request received ",  req.url, req.method);
    next();
});
app.get('/', (req, res) => {

});  
app.use((req,res,next) =>{
    res.write(`<!DOCTYPE html>
<html>
<head>
    <title>404 Not Found</title>
</head>
<body>
    <h1>404 Not Found</h1>
    <p>The page you are looking for does not exist.</p>
</body>
</html>`)

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});