const http = require('http'); // import http module 
const fs = require('fs');

function requestHandler(req, res) {
    console.log("I was here in handler..");
    // console.log(req); // read request objects
    // console.log(res) // read response objects
    // console.log(req.url, req.method, req.headers);
    res.setHeader("content-Type", "text/html");
    if (req.url === '/') {
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
                <label for="name">Budget:</label>
                <input type="text" id="name" name="budget" required>
                <br>
                <br>
                <label for="name">Product:</label>
                <input type="text" id="name" name="product" required>
                <br>
                <br>
                <input type="submit" value="Submit">
                </form>
            </body>
            </html>`)
    }

    else if (req.url === '/buy-product') {
        const buffer = [];
        // ! read data in streaming...
        req.on('data',(chunk) =>{
            buffer.push(chunk);
        });
        
        //! store data in Buffer 

        req.on('end', () => {
            const parseBody = Buffer.concat(buffer).toString();
            console.log(parseBody);
        });

        fs.writeFileSync('buy.txt','Vijay kumar');
        res.statusCode = 302
        res.setHeader('Location','/product').write(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>First Simple Server</title>
            </head>
            <body>
                <h1>All products </h1></h1>
                <p></p>
            </body>
            </html>`)
    }

    else if (req.url === '/product') {
        res.write(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>First Simple Server</title>
            </head>
            <body>
                <h1>Products will be appear </h1></h1>
                <p>This is a simple HTML page served by Node.js.</p>
            </body>
            </html>`)
    }
    else {
        res.statusCode = 404
        res.write(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>First Simple Server</title>
            </head>
            <body>
                <h1>Page Not Founds</h1></h1>
                <p>GO TO Return....</p>
            </body>
            </html>`)
    }
    res.end();
}
// create server 
const server = http.createServer(requestHandler);

const PORT = 3000
server.listen(PORT, () => console.log("server running on http://localhost:3000/"))
