const path = require('path')
const { addMovies, getMovies } = require('../services/movie-service')
const ejs = require('ejs')
const router = require('express').Router()
 
router.get('/add-movies', async(req, res)=>{
    // const movies = await addMovies(req.body)
    // if (movies){
    //     res.json(movies)
    // res.redirect('/')
    // }

    res.render("admin/add-movies",{
        pageTitle: "Add Movies"
    })

    
})
router.post('/add-movies', async(req, res)=>{
     const movies = await addMovies(req.body)
    if (movies){
        res.json(movies)
        // res.redirect('/')
    }
})
router.get('/movies', async(req, res)=>{
    const movies = await getMovies()
        if(movies){
            res.json(movies)
        }else {
            console.log(error);
        }
})
router.get('/', (req,res)=>{
    // res.send("<h1>Admin PAGE</h1>")
    res.render("admin/index")
}) 
module.exports = router