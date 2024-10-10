const express=require('express');
const mongoose=require('mongoose');


const jsonwebtoken=require('jsonwebtoken');
const dotenv=require('dotenv');
const morgan=require('morgan');
const connectDB = require('./config/db');





//dotenv config 
dotenv.config();

//DB connection
const DatabaseConnect=connectDB();

const app=express();
// middleware
app.use(express.json());
app.use(morgan("dev"));

app.get('/',(req,res)=>{
  res.status(200).send({
    message:"hello",
  })
})

const port=process.env.PORT || 8080;

app.listen(port,()=>{
    console.log(`Server Running in ${process.env.NODE_MODE} Running on Port ${process.env.PORT}`);
});