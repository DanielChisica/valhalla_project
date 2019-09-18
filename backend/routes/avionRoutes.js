const router = require('express').Router();
let avion = require('../modelo/avion');

router.post('/avion',(req, res) => {
    const silla = req.body.silla;
    const nuevoAvion = new avion();


    nuevoAvion.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});
