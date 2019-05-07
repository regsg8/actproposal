const mongoose = require('mongoose')
const Schema = mongoose.Schema

const testSchema = new Schema({
    composite: {
        type: Number,
        required: true
    },
    english: {
        type: Number,
        required: true
    },
    reading: {
        type: Number,
        required: true
    },
    math: {
        type: Number,
        required: true
    },
    science: {
        type: Number,
        required: true
    },
    date: Date,
    created: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Test", testSchema)