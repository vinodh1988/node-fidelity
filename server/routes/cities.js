const route=require("express").Router();
const city=require("../db/schemas/city");
const country=require("../db/schemas/country");

route.get("/all",function(request,response){
      
    city.find({},{_id:0},function(err,data){
         if(err)
            response.sendStatus(500);
         else
            response.json(data);
      });
});


module.exports=route;