const mongoose = require('mongoose')
const Schema = mongoose.Schema

const citySchema = new Schema({
  name: String,
  location: String
})

module.exports = mongoose.model('City', citySchema)