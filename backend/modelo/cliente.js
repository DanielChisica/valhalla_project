const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clienteSchema=new Schema({
    correo: String,
    nombre: String,
    origen: String,
    destino: Array,
    plant: Array,
    carros: Array,
    comida: Array
})

const cliente = mongoose.model('cliente', usuarioSchema)

module.exports=cliente
