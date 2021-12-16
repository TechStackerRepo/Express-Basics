const express = require('express');
const wiki = require('./wiki.js');
const app = express();
const port = 3000;

app.get('/', (request,response) => {
    response.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})

app.use('./wiki',wiki);