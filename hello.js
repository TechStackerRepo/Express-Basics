const http = require('http');
const hostname = "127.0.0.1";
const port = 8000;

const server = http.createServer((request,response) => {
    response.writeHead(200, {'content-type' : 'text/plain'});
    response.end('Hello World \n');
});

server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
} )