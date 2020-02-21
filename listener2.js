var express=require("express");
var app=express();
var cities=require('./server/routes/cities');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fidelity');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("mongo db connection is open");
});



app.use("/cities",cities);

app.get("/",function(req,res){
    res.send("Mongo API Home");
})

app.listen(4050,function(){
   console.log("Server is up and running on 4050");
});