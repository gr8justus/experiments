'use strict';

//Require http module
const http = require ('http');
const router = require ('./router'); 

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    router.home(request, response);
    router.user(request, response);
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});