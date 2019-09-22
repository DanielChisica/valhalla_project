const express = require  ('express')
const router = express.Router()
const vuelo = require('../modelo/modeloVuelo')

//agregar POST (create)
const sillas = require('../modelo/modeloSillas')

router.get('/crearSillas',(req, res) => {
    const nuevasSillas= new sillas()

    for(i=0;i<47;i++){
        nuevasSillas.PrimeraClase.push(false)
    }

    for(i=0;i<93;i++){
        nuevasSillas.Ejecutivo.push(false)
    }

    for(i=0;i<187;i++){
        nuevasSillas.Economica.push(false)
    }

    for(i=0;i<140;i++){
        nuevasSillas.Turistica.push(false)
    }

    nuevasSillas.save().then(()=>{
        console.log(nuevasSillas._id)
        res.send(nuevasSillas._id)
    }
    ).catch((err)=>{
        console.log(err)
        res.send(err)
        }
    )
});

router.post('/sillas',(req, res) => {
    console.log(req.body.PrimeraClase)
    console.log(req.body.Ejecutivo)
    console.log(req.body.Economica)
    console.log(req.body.Turistica)

    req.body.PrimeraClase.forEach((silla)=>{
        var clave = "PrimeraClase."+silla;
        var json = { };
        json[clave] = true;
        var actualizar = { $set: json};
        console.log(actualizar)
        sillas.findOneAndUpdate({ _id: req.body.idAvion},actualizar,false).then(()=>{
            console.log('Silla actualizada')
        }).catch((err)=>{
            console.log(err)
        })
    })

    req.body.Ejecutivo.forEach((silla)=>{
        var clave = "Ejecutivo."+silla;
        var json = { };
        json[clave] = true;
        var actualizar = { $set: json};
        console.log(actualizar)
        sillas.findOneAndUpdate({ _id: req.body.idAvion},actualizar,false).then(()=>{
            console.log('Silla actualizada')
        }).catch((err)=>{
            console.log(err)
        })
    })

    req.body.Economica.forEach((silla)=>{
        var clave = "Economica."+silla;
        var json = { };
        json[clave] = true;
        var actualizar = { $set: json};
        console.log(actualizar)
        sillas.findOneAndUpdate({ _id: req.body.idAvion},actualizar,false).then(()=>{
            console.log('Silla actualizada')
        }).catch((err)=>{
            console.log(err)
        })
    })

    req.body.Turistica.forEach((silla)=>{
        var clave = "Turistica."+silla;
        var json = { };
        json[clave] = true;
        var actualizar = { $set: json};
        console.log(actualizar)
        sillas.findOneAndUpdate({ _id: req.body.idAvion},actualizar,false).then(()=>{
            console.log('Silla actualizada')
        }).catch((err)=>{
            console.log(err)
        })
    })

    res.send("Avion actualizado")
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
