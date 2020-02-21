const connection=require('./connection');

const tasks={
   
    addPerson:function(person,callback){
       
         connection.query("insert into person values(?,?,?)",
        [person.sno,person.name,person.city],callback);
    },

    getPeople: function(callback){
        connection.query("select * from person",callback);
    }

}


module.exports=tasks;