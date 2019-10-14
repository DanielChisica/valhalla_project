'use strict'

const usuario = require('../modelo/modeloUsuarios')
const servicio = require('../servicios');
const bcrypt=require('bcrypt');

function registrar (req, res) {
    const nuevoUsuario = new usuario({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        cc:req.body.cc,
        correo: req.body.correo,
        contrasena: req.body.contrasena,
    })

    console.log(nuevoUsuario)

    nuevoUsuario.save((err) => {
        if (err) return res.status(500).send({ message: `Error al crear el usuario: ${err}` })
        return res.status(201).send({ token: servicio.crearToken(nuevoUsuario) })
    })
}

function entrar (req, res) {
    usuario.findOne({ correo: req.body.correo }, (err, usuario) => {
        if (err) return res.status(500).send({ message: err })
        if (!usuario) return res.status(404).send({ message: 'No existe el usuario' })

        return usuario.compareContrasena(req.body.contrasena, (err, iguales) => {
            if (err) return res.status(500).send({ msg: `Error al ingresar: ${err}` })
            if (!iguales) return res.status(404).send({ msg: `Error de contraseña: ${req.body.correo}` })

            req.usuario = usuario
            return res.status(200).send({ msg: 'Te has logueado correctamente', token: servicio.crearToken(usuario) })
        });

    }).select('id_ correo +contrasena')
}

module.exports = {
    registrar,
    entrar
}