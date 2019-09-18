const mongoose = require('mongoose')
const Schema = mongoose.Schema

const avionSchema= new Schema({
    "sillas":Array
})

const Avion = mongoose.model('avion', avionSchema)

module.exports = Avion
