
const Movie = require('../model/movies')
const User = require('../model/user')

const addToList = async(movieId)=>{
    const movie = await Movie.findById(movieId)

    const user = await User.findById('6390af0e72ba277334fc9367')
    const {email, password} = user
    const moviesList = User().myList.moviesList
    // console.log(moviesList);
    try {
        // THIS LINE CHECKS THE MOVIE ID, 
        const listIndex = moviesList.findIndex(mL=>{
            return mL.movieId.toString() === movie._id.toString()
        })

        // DONT WANT TO MUTATE MY ARRAY SO I USED THE REST OPERATOR
        const updatedMovieList = [...moviesList]

        // CHECK IF THERE IS NO MOVIE IN MY LIST WITH THE MOVIE ID, HENCE ADD A NEW MOVIE TO "moviesList" 
        if(!listIndex){
            updatedMovieList.push({
                movieId: movie._id,
                title: movie.title
            })
        }
        // STORE THE UPDATED MOVIELIST IN A NEW VARIABLE
        const updatedList = {moviesList: updatedMovieList}
        
        // SAVING LATEST UPDATE TO USER COLLECTION
        const updatingUser =  await User({
            email: email,
            password: password,
            myList: updatedList
        }) 
        return updatingUser.save()
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