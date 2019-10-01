//contiene la representacion en codigo de la collection de la base de datos
//sera la plantilla de la collection

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const DestinosSchema = new Schema({//variable que tiene todas las propiedades del metodo por eso la instanciamos

    planturisticoSuecia: Array,
    planturisticoIslandia : Array,
    planturisticoFindalia : Array,
  

})


//variable modelo = mongoose.model('collection', plantillaconllention)
const Destinos = mongoose.model('destinos', DestinosSchema)

module.exports = Destinos
