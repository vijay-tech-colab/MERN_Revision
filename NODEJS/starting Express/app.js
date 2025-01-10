const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    console.log('This is a middleware');
    next();
});
app.use((req, res, next) => {
    console.log(new Date());
    next();
})
app.get('/', (req, res) => {
    res.status(200).send('<h1>Hello, World!</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});