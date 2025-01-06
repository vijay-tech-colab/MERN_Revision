const http = require('http'); // import http module 


function requestHandler(req, res) {
    console.log("I was here in handler..");
    // console.log(req); // read request objects
    // console.log(res) // read response objects
    console.log(req.url, req.method, req.headers);
    res.setHeader("content-Type", "text/html");
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>First Simple Server</title>
</head>
<body>
    <h1>Welcome to My First Simple Server</h1>
    <p>This is a simple HTML page served by Node.js.</p>
</body>
</html>`)
res.end();
}
// create server 
const server = http.createServer(requestHandler);

const PORT = 3000
server.listen(PORT, () => console.log("server running on http://localhost:3000/"))
