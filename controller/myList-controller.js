const { addToList, 
    // getList, 
    // removeFromList 
} = require('../services/myList-service')


const router = require('express').Router()


router.put('/:movieId', async(req,res)=>{
    const movieId = req.params.movieId
    const { authorization } = req.headers;
     const token = authorization
    console.log(token);
    const movieList = await addToList(movieId, token)
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