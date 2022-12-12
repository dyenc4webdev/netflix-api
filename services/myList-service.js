
const Movie = require('../model/movies')
const User = require('../model/user')

const addToList = async(movieId)=>{
    const movie = await Movie.findById(movieId)
    const moviesList = Object(User().myList.moviesList)
    console.log(moviesList);
    try {
        const listIndex = moviesList.findIndex(mL=>{
            return mL.movieId.toString() === movie._id.toString()
        })
        const updatedMovieList = [...moviesList]
        if(!listIndex){
            updatedMovieList.push({
                movieId: movie._id
            })
        }
        const updatedList = {moviesList: updatedMovieList}
        User().myList = updatedList
        return User.save()
        // return User.addToList(movie)
    } catch (error) {
        console.log(error);
    }
}
const getList = async()=>{
    const movieLists = User.populate("myList.moviesList.movieId")
    try {
        return movieLists
    } catch (error) {
        console.log(error);
    }
}
const removeFromList = async(movieId)=>{
    const movie = await Movie.findById(movieId)
    try {
        return User.removeFromList(movie)
    } catch (error) {
        console.log(error);
    }

}
module.exports = {
    addToList,
    getList,
    removeFromList 
}