const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const authController = require('./controller/auth-controller')

mongoose.connect("mongodb+srv://dyenc4:webdev@netflix-api.jlugppo.mongodb.net/?retryWrites=true&w=majority")
.then(result=>{
    console.log("DATABASE CONNECTED");
})

app.use(express.json())

app.use('/signup', authController)

app.listen(6000, ()=>{
    console.log("app working perfectly");
})