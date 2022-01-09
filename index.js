var express = require('express');
var app = express();
var db = require('./db');
var port = 7000;
var cors = require('cors');
app.use(cors());

db;

app.get('/', (req, res) => {
    res.send("Welcome to the zomato server");
    
})


const AuthController = require('./model/authcontroller');
app.use('/api/auth',AuthController);

app.listen(port,() => {
    console.log('Listing to port '+port)
})