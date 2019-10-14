//contiene la representacion en codigo de la collection de la base de datos
//sera la plantilla de la collection

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const SillasSchema = new Schema({//variable que tiene todas las propiedades del metodo por eso la instanciamos
    PrimeraClase : Array(47),
    Ejecutivo : Array(93),
    Economica : Array(187),
    Turistica : Array(140)
})


//variable modelo = mongoose.model('collection', plantillaconllention)
const Sillas = mongoose.model('sillas', SillasSchema)

module.exports = Sillas
