require('dotenv').config();

const mongoose = require("mongoose");
require('dotenv').config();


var mongoURL = 'mongodb+srv://kashyaprohit:kashyap123@cluster0.dcoqp.mongodb.net/mern-pizza'

mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull');
})

db.on('error' , ()=>{
    console.log(`Mongo DB Connection failed`);
})

module.exports =mongoose