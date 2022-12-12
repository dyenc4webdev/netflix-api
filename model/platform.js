const mongoose = require('mongoose')
const Schema = mongoose.Schema

const planformSchema = new Schema({
    monthlyPrice: {
        type: String,
        required: true
    },
    videoQuality: {
        type: String,
        required: true
    },
    resolution: {
        type: String,
        required: true
    },
    devies: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Planform', planformSchema)