const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const IdeaSchema = new Schema({
    title: {
        type: String,
        required: true,
        default: 'New Title'
    },
    description: {
        type: String,
        required: false,
        default: 'New Content'
    }
}, {
    timestamps: {}
})

module.exports = IdeaSchema