const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    myList: {
        moviesList: [
            {
                movieId: {
                    type: Schema.Types.ObjectId,
                    ref: "Movie"
                }
            }
        ]
    }

})
// userSchema.methods.addToList = function(movie){
//     const listIndex = this.myList.moviesList.findIndex(mL=>{
//         return mL.movieId.toString() === movie._id.toString()
//     })
//     const updatedMovieList = [...this.myList.moviesList]
//     if(!updatedMovieList){
//         updatedMovieList.push({
//             movieId: movie._id
//         })
//     }
//     const updatedList = {moviesList: updatedMovieList}
//     this.myList = updatedList
//     return this.save()
// }
// userSchema.methods.removeFromList = function(movieId){
//     const updatedMovieList = this.myList.moviesList.filter(movie =>{
//         return movie.movieId.toString() !== movieId.toString()
//     })
//     this.myList.moviesList = updatedMovieList
//     return this.save()
// }
module.exports = mongoose.model('User', userSchema)

