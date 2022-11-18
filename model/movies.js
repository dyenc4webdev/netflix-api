const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const crewSchema = new Schema({
//     director: {
//         type: String,
//         require: true
//     },
//     writer: {
//         type: String,
//         require: true
//     },
// })
// const aboutMovieSchema = new Schema({
//     brief: {
//             type: String,
//             require: true
//         },
//     cast: Schema.Types.Array,
//     crew:[crewSchema],
//     rating: {
//         type: String,
//         require: true
//     },
//     theMovieIs: {
//         type: String,
//         require: true
//     },
//     length: {
//         type: String,
//         require: true
//     },
//     yearOfProduction:{
//         type: String,
//         require: true
//     },
// })
// const moviesSchema = new Schema({
//     title:{
//         type: String,
//         require: true
//     },
//     aboutMovie:[aboutMovieSchema],
//     keywords:[],
//     collections:[],
//     categories:[],
//     imageUrl: {
//         type: String,
//         require: true
//     },
//     mainVideoUrl: {
//         type: String,
//         require: true
//     },
//     thrillerVideoUrl: {
//         type: String,
//         require: true
//     },

// })
const moviesSchema = new Schema({
    title:{
        type: String,
        require: true
    },
    brief: {
        type: String,
        require: true
    },
    
    director: {
        type: String,
        require: true
    },
    writer: {
        type: String,
        require: true
    },
    rating: {
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
    cast: {
        type: Schema.Types.Array,
        require: true
    },
    keywords:{
        type: Schema.Types.Array,
        require: true
    },
    collections:{
        type: Schema.Types.Array,
        require: true
    },
    categories:{
        type: Schema.Types.Array,
        require: true
    },
})



module.exports = mongoose.model('Movie', moviesSchema)
