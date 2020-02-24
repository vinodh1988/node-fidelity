var express=require("express");
var app=express();
var cities=require('./server/routes/cities');

var parser=require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fidelity');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("mongo db connection is open");
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(parser.json());
app.use("/cities",cities);


app.get("/",function(req,res){
    res.send("Mongo API Home");
})

app.listen(4050,function(){
   console.log("Server is up and running on 4050");
});