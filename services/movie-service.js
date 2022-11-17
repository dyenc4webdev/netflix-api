const Movie = require('../model/movies')

const addMovies = async (movie)=>{
    const newMovie = new Movie({
        ...movie,
        // movie.cast.slit(" , ")
    })
    try {
        const movies = await newMovie.save()
        return movies
    }
    catch (e){
        console.log(e);
    }
}
const getMovies = async()=>{
    const movies = await Movie.find()
    return movies
}
module.exports = {
    addMovies,
    getMovies
}