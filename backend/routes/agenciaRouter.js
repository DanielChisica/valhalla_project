const express = require  ('express')
const router = express.Router()
const vuelo = require('../modelo/modeloVuelo')
const sillas = require('../modelo/modeloSillas')
const destinos = require('../modelo/modeloDestinos')


//agregar POST (create) 

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

//traigame todos los destinos
router.get('/destinos', (req, res, next) => {
    //db.collection.find()
  destinos.find({  }).then((destinos) => {
        res.send(destinos)
    }).catch(next)
})

// anidado
router.get('/vuelo/anidado', (req, res, next) => {
    //db.collection.find()
  vuelo.find({  }).then((vuelo) => {
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

router.put('/sillas/:id', (req, res, next) => {
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


// anidado
router.get('/sillas/anidado', (req, res, next) => {
    //db.collection.find()
  sillas.find({  }).then((vuelo) => {
        res.send(vuelo)
    }).catch(next)
})


module.exports = router