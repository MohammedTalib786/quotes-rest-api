const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    sr_no: {
        type: Number,
        required: true
    },
    text: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
    }
})

const Quotes = new mongoose.model("Quote", schema);
module.exports = Quotes;