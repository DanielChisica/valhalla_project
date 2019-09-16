//contiene la representacion en codigo de la collection de la base de datos
//sera la plantilla de la collection

const mongoose = require('mongoose')
const Schema = mongoose.Schema
var HotelSchema = new Schema({
    nombreHOtel: String,
    ubicacion : String,
    Gps : Number,
    comida : String

});



const VueloSchema = new Schema({//variable que tiene todas las propiedades del metodo por eso la instanciamos

    itinerario : String,
    ciudadorigen : String,
    ciudadorigen : String,
    ciudaddestino : String,
    horasvuelo : Number,
    horasalida : Number,
    horallegada : Number,
    jornadaorigen : String,
    jornadallegada : String,
    hotel : [HotelSchema]

})


//variable modelo = mongoose.model('collection', plantillaconllention)
const Vuelo = mongoose.model('vuelo', VueloSchema)

module.exports = Vuelo
