const http = require('http'); // import http module 
const RequestHandler = require('./requestHandler')


// create server 
const server = http.createServer(RequestHandler);

const PORT = 3000
server.listen(PORT, () => console.log("server running on http://localhost:3000/"))
