var mysql=require('mysql');

var connection=mysql.createPool({

host:'localhost',
user:'root',
password:'password',
database:'fidelity'

});


module.exports=connection;

//sequelize--Node JS ORM Framework