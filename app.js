require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 4500
// const cors = require('')

const { logger} = require('./middlewares/logEvents')
// custom middleware logger
app.use(logger)

const authController = require('./controller/auth-controller')
const verifyJwt = require('./middlewares/auth')
const movieController = require('./controller/movie-controller')
const myListController = require('./controller/myList-controller')
const planformController = require('./controller/planform-controller')


mongoose.connect("mongodb+srv://dyenc4:webdev@netflix-api.jlugppo.mongodb.net/netflix?retryWrites=true&w=majority")
.then(result=>{
    console.log("DATABASE CONNECTED");
})
app.set('view engine', "ejs")
app.set('views', "views")

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/auth', authController)
app.use((req, res, next)=> {

    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');  
    res.header("Access-Control-Allow-Headers", "Authorization");

    console.log(req.headers['authorization'], "authorization");

    next()
})
app.use(verifyJwt)
app.use('/api/admin', movieController)
app.use('/list', myListController)
app.use('/collection', planformController)

app.get('/', (req,res)=>{
    res.send('<h1>HOME PAGE</h1>')
})
app.listen(PORT, ()=>{
    console.log("app working perfectly");
})