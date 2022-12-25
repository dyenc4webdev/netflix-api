const jwt = require("jsonwebtoken");
const Movie = require('../model/movies')
const User = require('../model/user')
const { NotFoundError } = require('../utils/apiError')

const addToList = async(movieId, token)=>{
    //1. CHECK IF SUCH MOVIE EXISTS IN THE MAIN MOVIE DATABASE
    const movie = await findMovieById(movieId)
    // 2. ADD TO USER'S LIST
    try {
        
        if(movie){
            // GET THE ID OF THE CURRENT LOGGED-IN USER (retrievedId)
           
            const user = await getUserFromToken(token)
            // - use that id to find and update. == findOneAndUpdate({_id: retreivedID}, query)
		    await addMovieToUserList(user.id, movie);
        }
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
// const removeFromList = async(movieId)=>{
//     const movie = await findMovieById(movieId)
//     try {
//         return User.findByIdAndRemove(movie)
//     } catch (error) {
//         console.log(error);
//     }

// }

const getUserFromToken = async(token)=>{
    const decoded = jwt.verify(token.split(" ")[1], process.env.AUTH_SECRET);
    if(!decoded){
        throw new NotFoundError("User not found")
    }
    return serializeUser(decoded.user)
}
const serializeUser = (user)=>{
    return{
        id: user._id,
        email: user.email
    }
}
const addMoveToList = async (movieID) => {
	// 1. check if such movie exists in the main movie database
	const movie = await findMovieById(movieID);
	if (movie) {
		// 2. add to user's list
		// - get the id of the current logged-in user (retreivedID)
		const user = await getUserFromToken(token);

		// - use that id to find and update. == findOneAndUpdate({_id: retreivedID}, query)
		await addMovieToUserList(user.id, movieID);
	}
};

const findMovieById = async (_id) => {
	return Movie.findOne({ _id });
};

const findUserById = async (_id) => {
	return User.findOne({ _id });
};

const addMovieToUserList = async (userID, movieID) => {
	return User.findOneAndUpdate(
		{ _id: userID },
		{ $push: { movieId: {movieID} } },
		{ new: true, useFindAndModify: false }
	);
};


module.exports = {
    addToList,
    getList,
}