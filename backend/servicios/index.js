'use strict';

const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config');

function crearToken (usuario) {
    const codigo = {
        sub: usuario.cc,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix()
    }
    return jwt.encode(codigo, config.LLAVE_ESCONDIDA)
}

function decodificarToken (token) {
    const decodificado = new Promise((resolve, reject) => {
        try {
            const mensaje = jwt.decode(token, config.LLAVE_ESCONDIDA);

            if (mensaje.exp <= moment().unix()) {
                reject({
                    status: 401,
                    message: 'El token ha expirado'
                })
            }
            resolve(mensaje.sub)
        } catch (err) {
            reject({
                status: 500,
                message: 'Token invalido'
            })
        }
    })

    return decodificado
}

module.exports = {
    crearToken,
    decodificarToken
}