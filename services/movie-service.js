const Movie = require('../model/movies')

const addMovies = async (movie)=>{
    const newMovie = new Movie({
        ...movie,
    })
    try {
        const movies = await newMovie.save()
        return movies
    }
    catch (e){
        console.log(e);
    }
}
module.exports = {
    addMovies,
}