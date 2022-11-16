const mongoose = require('mongoose')
const Schema = mongoose.Schema


const moviesSchema = new Schema({
    title:{
        type: String,
        require: true
    },
    aboutMovie: {
        moviesBrief: {
            type: String,
            require: true
        },
        cast:[],
        crew: {
            director: {
                type: String,
                require: true
            },
            writer: {
                type: String,
                require: true
            },
        },
        maturityRating: {
            type: String,
            require: true
        },
        theMovieIs: {
            type: String,
            require: true
        },
        length: {
            type: String,
            require: true
        },
        yearOfProduction:{
            type: String,
            require: true
        },
    },
    keywords:[],
    collections:[],
    categories:[],
    imageUrl: {
        type: String,
        require: true
    },
    mainVideoUrl: {
        type: String,
        require: true
    },
    thrillerVideoUrl: {
        type: String,
        require: true
    },

})



module.exports = mongoose.model('Movie', moviesSchema)
