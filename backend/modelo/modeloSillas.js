//contiene la representacion en codigo de la collection de la base de datos
//sera la plantilla de la collection

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const SillasSchema = new Schema({//variable que tiene todas las propiedades del metodo por eso la instanciamos

    claseEconomicaA : Array,
    claseEconomicaB : Array,
    claseEconomicaC : Array,
  

})


//variable modelo = mongoose.model('collection', plantillaconllention)
const Sillas = mongoose.model('sillas', SillasSchema)

module.exports = Sillas
