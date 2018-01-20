const mongoose = require('mongoose')
const Schema = require('../schema')
const Idea = mongoose.model('Idea', Schema)

module.exports = Idea