const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuarioSchema=new Schema({
    correo: String,
    nombre: String
})

const usuario = mongoose.model('usuario', usuarioSchema)

module.exports=usuario
