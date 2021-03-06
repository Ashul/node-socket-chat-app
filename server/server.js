const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname+'/../client');
const port = process.env.PORT || 3000;

var app = express();

app.use(express.static(publicPath))

app.listen(port, ()=> {
    console.log(`App running on ${port}`)
})