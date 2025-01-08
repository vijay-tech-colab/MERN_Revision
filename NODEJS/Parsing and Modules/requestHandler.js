const fs = require('fs');
const { URLSearchParams } = require('url');

function RequestHandler(req, res) {
    console.log("I was here in handler...");
    
    res.setHeader("Content-Type", "text/html");

    if (req.url === '/' && req.method === 'GET') {
        res.write(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Myntra</title>
            </head>
            <body>
                <h1>Welcome to My First Simple Server</h1>
                <p>This is a simple HTML page served by Node.js.</p>
                <form action="/buy-product" method="post">
                    <label for="budget">Budget:</label>
                    <input type="text" id="budget" name="budget" required>
                    <br><br>
                    <label for="product">Product:</label>
                    <input type="text" id="product" name="product" required>
                    <br><br>
                    <input type="submit" value="Submit">
                </form>
            </body>
            </html>`);
        res.end();
    } 

    else if (req.url === '/buy-product' && req.method === 'POST') {
        const buffer = [];

        // Read data in chunks
        req.on('data', (chunk) => {
            buffer.push(chunk);
        });

        // Process the complete data
        req.on('end', () => {
            const parseBody = Buffer.concat(buffer).toString();
            const urlParams = new URLSearchParams(parseBody);
            const bodyJson = {};

            for (let [key, value] of urlParams.entries()) {
                bodyJson[key] = value;
            }

            // Asynchronously write to file
            fs.writeFile('buy.txt', JSON.stringify(bodyJson), (err) => {
                if (err) {
                    console.error("Error writing file:", err);
                    res.statusCode = 500;
                    res.write('<h1>Internal Server Error</h1>');
                    res.end();
                    return;
                }
                // Redirect to /product after saving data
                res.statusCode = 302;
                res.setHeader('Location', '/product');
                res.end();
            });
        });
    } 

    else if (req.url === '/product' && req.method === 'GET') {
        res.write(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>First Simple Server</title>
            </head>
            <body>
                <h1>Products will appear here</h1>
                <p>This is a simple HTML page served by Node.js.</p>
            </body>
            </html>`);
        res.end();
    } 

    else {
        res.statusCode = 404;
        res.write(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>First Simple Server</title>
            </head>
            <body>
                <h1>Page Not Found</h1>
                <p>Go back to the <a href="/">home page</a>.</p>
            </body>
            </html>`);
        res.end();
    }
}

module.exports = RequestHandler;
