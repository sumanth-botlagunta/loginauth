var express = require('express');
var app = express();
var db = require('./db');
var port = 7000;
var cors = require('cors');
app.use(cors());


const AuthController = require('./model/authcontroller');
app.use('/api/model',AuthController);

app.listen(port,() => {
    console.log('Listing to port '+port)
})