 var router=require('express').Router();
 var tasks=require('../db/dao');

 router.post("/add",function(request,response){
    let sno=request.body.sno;
    let name=request.body.name;
    let city=request.body.city;

    let person={sno:sno,name:name,city:city};

    tasks.addPerson(person,function(err,data){
        if(err)
           response.sendStatus(500);
        else
           response.send("Row inserted");
    });

    
    
 })

 router.get("/report",function(request,response){
    tasks.getPeople(function(err,data){
        if(err)
             response.sendStatus(500);
        else
             response.render("people",{people:data});
    });


 });

module.exports=router;