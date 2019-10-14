const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
    "fechaVuelo": {
      "fechaSalida": String,
      "horaSalida": String,
      "fechaLlegada": String,
      "horaLlegada": String,
      "fechaSalidaVuelta": String,
      "horaSalidaVuelta": String,
      "fechaLlegadaVuelta": String,
      "horaLlegadaVuelta": String,
    },
    "destino": {
      "paisOrigen": String,
      "aeropuertoDestino": String,
      "paisOrigenVuelta": String,
      "aeropuertoDestinoVuelta": String
      },
    "categoria": {
      "tipoCategoria": String,
      "precioTiquete": Number,
      "cantidadPasajerosAdultos": Number,
      "cantidadPasajerosNinos": Number,
      "valortotal": Number
    },
    "planTuristico": {
      "suecia": Array,
      "finlandia": Array,
      "islandia": Array
    },
    "valorTotalPlan": {
      "valorPlanturisticoSuma": Number
    },
    "hotel": {
      "ciudadDestino": String,
      "tipoAcomodacion": String,
      "valorHospedaje": Number,
      "habitaciones": Number,
      "adultos": Number,
      "ninos": Array,
         "servicios": Array
    },
    "alimentacion": {
      "almuerzoYcena": Boolean,
      "Bufe": {
        "suecia": Array,
        "finlandia": Array,
        "islandia": Array
      },
      "totalAlimentacon": Number
    },
    "bar": {
      "Snaps": String,
      "Glögg": String,
      "Fjallagrasa": String
    },
    "alquilerVehiculo": {
      "vehiculo": {
        "tipo": String,
        "marca": String,
        "modelo": String,
        "dias": Number,
        "valorAlquiler": Number
      }
    },
    "show":{
        "suecia":Array,
        "finlandia":Array,
        "islandia":Array
    },

    "usuario":{
    "usuarioNombre":String,
    "usuarioApellido":String,
    "Cedula":String,
    "password":String,
    "millasAcumuladas":Number,
    "correo":String
  }

})
//variable modelo = mongoose.model('collection', plantillaconllention)
// va crear una coleccion ques se llame todo y todoSechema es el esquema
const Todo = mongoose.model('agencia', todoSchema)

module.exports = Todo