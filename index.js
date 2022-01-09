var express = require('express');
var app = express();
const mongo = require('mongodb');
const mongoclient = mongo.MongoClient;
var port = 7000;
var cors = require('cors');
app.use(cors());

var mongourl = 'mongodb+srv://sumanth:12345@sumanth.w8xsd.mongodb.net/zomato?retryWrites=true&w=majority';
var db;

app.get('/', (req, res) => {
    res.send("Welcome to the Login api");
    
})

const AuthController = require('./model/authcontroller');
app.use('/api/model',AuthController);

mongoclient.connect(mongourl, (err, client) => {
    if(err) {console.log("error while connecting mongodb server");}
    db = client.db('zomato');
    app.listen(port, () => {
        console.log(`listening on port no ${port}`)
    })
})