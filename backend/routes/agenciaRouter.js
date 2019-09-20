const express = require  ('express')
const router = express.Router()
const vuelo = require('../modelo/modeloVuelo')
//agregar POST (create)
let avion = require('../modelo/avion');

router.post('/avion',(req, res) => {
    console.log('entra')
    console.log(req.body.silla)
    const nuevoAvion= new avion({
        "nombre":"Boeing 747",
        "sillas":[0]
    })
    nuevoAvion.save()
    const silla = req.body.silla;
    var clave = "sillas."+silla;
    var json = { };
    json[clave] = 1;
    var actualizar = { $inc: json};
    console.log(actualizar)
    avion.findOneAndUpdate({nombre:"Boeing 747"},actualizar).then(
            () => res.json('Avion actualizado!'))
});


router.post('/vuelo', (req, res, next) => {
    //db.collection.insert( documento )
    //req.body -> hace referencia al json documento = {nombre:"", año:"", activa:""}
    vuelo.create(req.body).then((banda) => {
        res.send(banda)
    }).catch(next)
})

//consultar -> get  - read

router.get('/vuelo', (req, res, next) => {
    //db.collection.find()
  vuelo.find({  }).then((vuelo) => {
        res.send(vuelo)
    }).catch(next)
})

// anidado
router.get('/vuelo/anidado', (req, res, next) => {
    //db.collection.find()
  vuelo.find({ "hotel.nombreHotel": "nordico"  }).then((vuelo) => {
        res.send(vuelo)
    }).catch(next)
})

//actualizacion dato -> update PUT
//aveiguar como se usa multi:true para actualizar varias lineas

router.put('/vuelo/:id', (req, res, next) => {
    //db.collv ection.uodate ({condicion }, {$set: {}})
    vuelo.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
        //db.collection.find({condicion})
        vuelo.findOne({ _id: req.params.id }).then((vuelo) => {
            res.send(vuelo)
        })
    }).catch(next)
})



//Eliminar - Delete

router.delete('/vuelo/:id', (req, res, next) => {
    Bandas.findOneAndRemove({ _id: req.params.id }).then((band) => {
        res.send(banda)
    }).catch(next)
});


module.exports = router
