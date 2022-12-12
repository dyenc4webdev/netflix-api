const { addToList, 
    // getList, 
    // removeFromList 
} = require('../services/myList-testService')


const router = require('express').Router()


router.post('/:movieId', async(req,res)=>{
    const movieId = req.params.movieId
    const movieList = await addToList(movieId)
    if(movieList){
        res.redirect('/movie-list')
    }
    
})
router.get('/movie-list', async(req, res)=>{
    const listedMovies = await getList()
    if (listedMovies){
        res.json(listedMovies)
    }
})
router.post('removeFromList/:movieId', async(req,res)=>{
    const movieId = req.params.movieId
    const movieList = await removeFromList(movieId)
    try {
        res.redirect('/movie-list')
        return movieList
    } catch (error) {
        console.log(error);
    }
})
module.exports = router