//

const express = require ('express')  //paso de parametros manejo de rutas
const bodyParser = require ('body-parser') //mdielware que analiza los parametros de la URL
const mongoose = require ('mongoose') //conectar mongodb  con node
const routes = require('../routes/agenciaRouter') // manejador del CRUD (create, read, update, dlete)
const app = express() //referencia de express application - > app
const cors = require('cors');
app.use(cors());


const config = require('./db')
const PORT = 8080 //puerto del servidor de node


//conexion a BD - Node y Mongo
mongoose.connect(config.DB, {useNewUrlParser: true}).then(
    ()=>{console.log('Conexión Exitosa')},
    error =>{console.log(`Conexion error ${error}`)
})


//manjeo middlewares

app.use(bodyParser.json())//interpretar los parametros en formato JSON (datos a manipular la base de datos)


app.use('/api', routes)

app.use((err, req, res, next)=>{
res.status(422).send({error: err.message}) //estao http 422 indica error de sintaxis
})

//conexión a puerto servidor node
app.listen(PORT, ()=>{
    console.log(`Corriendo en el puerto ${PORT}`)
})
