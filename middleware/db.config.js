const {Sequelize} = require('sequelize');

const database = new Sequelize("mysqlcon_node","root","",{
  host:"localhost",
  port:"3306",
  dialect:"mysql"  
})

module.exports=database;