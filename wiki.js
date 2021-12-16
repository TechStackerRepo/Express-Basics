// wiki.js - Wiki route module
const express = require('express');
const route = express.Router();

// wiki Home Page route
route.get('/', (request,response) => {
    response.send('Wiki Home Page');
});

// wiki About Page route
route.get('/about', (request,response) => {
    response.send('Wiki About Page');
});

module.exports = route;

