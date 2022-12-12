const jwt = require("jsonwebtoken");
const Movie = require('../model/movies')
const User = require('../model/user')

	// console.log(authorization);

const addToList = async(movieDBId)=>{
  // check if a user has an athorization header
	const { authorization } = req.headers;
  const movie = await Movie.findById(movieDBId)
  const moviesList = User().myList.moviesList
  // console.log(moviesList);
  if (authorization) {
    if (authorization.split(" ")[0] == "Bearer") {
    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.AUTH_SECRET);
    // if line 2 is true, then check if the bearer token is valid
    if (decoded.id) {
    // search user by id
      try {
        const user = await User.findById({ _id: decoded.id });
          if (user) {
            const {email, password} = user
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
          const updatedUser =  await User({
              email: email,
              password: password,
              myList: updatedList
          }) 
          return updatedUser.save()
          } catch (error) {
              console.log(error);
            }
        } else {
          return res.status(401).json({
           message: "Invalid token provided",
          });
        }
      } catch (e) {
        throw new Error(e);
      }
    } else {
      return res.status(500).json({
        message: "malformed token provided",
      });
    }
  }
  return res.status(500).json({
    message: "This route requires a bearer token",
  });
}
return res.status(500).json({
    message: "Please provide an authorization header to access this route",
});
}

module.exports = {
    addToList,
}