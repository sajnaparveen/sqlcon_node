const express=require("express")
const app=express()
const sequelie=require("sequelize")
const port=3000
const { append } = require("express/lib/response")
const db=require('./middleware/db.config')
const database = require("./middleware/db.config")
//db connection
db.authenticate().then(()=>{
    console.log("database connected");
   //  db.query("create database mysqlcon_node")
 
}).catch(err=>{
    console.log(err.message);
    process.exit(1);
})
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})