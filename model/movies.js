const mongoose = require('mongoose')
const Schema = mongoose.Schema


const moviesSchema = new Schema({
    title:String,
    aboutMovie: {
        moviesBrief: { type: String },
        cast:[],
        crew: {
            director: { type: String },
            writer: { type: String }
        },
        maturityRating: { type: String },
        theMovieIs: { type: String },
        length: { type: String },
        yearOfProduction:{ type: Number },
    },
    keywords:[],
    collections:[],
    categories:[],
    imageUrl: String,
    mainVideoUrl: String,
    thrillerVideoUrl: String

})



module.exports = mongoose.model('movies', moviesSchema)
