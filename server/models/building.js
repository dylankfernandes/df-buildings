const mongoose = require('mongoose')
const Schema = mongoose.Schema

const buildingSchema = new Schema({
  name: String,
  rentable: Boolean,
  rentPrice: Number,
  buildingType: String,
  rating: Number,
  cityId: String,
})

module.exports = mongoose.model('Building', buildingSchema)