const path = require('path')
const { addMovies } = require('../services/movie-service')

const router = require('express').Router()

router.get('/add-movies', async(req, res)=>{
    const movies = await addMovies(req.body)
    if (movies){
        res.json(movies)
    }
    res.render("admin/add-movies",
        {
            path: "/admin/add-movies",
            pageTitle: "movies population",

        }
    )
    // res.sendFile(path.join(__dirname,"../", "views", "movies.html"))
})
router.get('/', (req,res)=>{
    res.send("<h1>HOME PAGE</h1>")
})  
module.exports = router