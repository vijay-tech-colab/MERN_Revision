const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
app.use(express.urlencoded({extended : true}));

app.use((req, res, next) => {
    console.log(new Date(Date.now()).toString());
    next();
});

app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Product and Budget Form</title>
    </head>
    <body>
        <h1>Product and Budget Form</h1>
        <form action="/buy-products" method="post">
            <label for="product">Product:</label>
            <input type="text" id="product" name="product" required>
            <br>
            <label for="budget">Budget:</label>
            <input type="number" id="budget" name="budget" required>
            <br>
            <button type="submit">Submit</button>
        </form>
    </body>
    </html>`
); 
});

app.post('/buy-products', (req, res) => {
    const data = req.body;
    console.log(data)
    fs.writeFile("data.json",JSON.stringify(data),() => {
        res.json(data);
        res.redirect('/products');
    })
    
});
app.use((req,res,next) =>{
    res.send('<h1>404 page</h1>')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

