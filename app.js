const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const authController = require('./controller/auth-controller')
const movieController = require('./controller/movie-controller')

mongoose.connect("mongodb+srv://dyenc4:webdev@netflix-api.jlugppo.mongodb.net/netflix?retryWrites=true&w=majority")
.then(result=>{
    console.log("DATABASE CONNECTED");
})
app.set('view engine', "ejs")
app.set('views', "views")

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/signup', authController)
app.use('/admin', movieController)

app.get('/', (req,res)=>{
    res.send('<h1>HOME PAGE</h1>')
})
app.listen(2000, ()=>{
    console.log("app working perfectly");
})