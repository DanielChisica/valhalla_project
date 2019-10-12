'use strict';

const servicios = require('../servicios');

function estaAutenticado (req, res, next) {
    if (!req.headers.autorizacion) {
        return res.status(403).send({ message: 'No tienes autorización' })
    }

    const token = req.headers.autorizacion.split(' ')[1]

    servicios.decodificarToken(token)
        .then(response => {
            req.usuario = response
            next()
        })
        .catch(response => {
            res.status(response.status)
        })
}

module.exports = estaAutenticado