const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt=require('bcrypt')

const usuarioSchema= new Schema({
    nombre: String,
    apellidos: String,
    correo: {type:String, unique:true, lowercase:true},
    contrasena: {type: String, select:false},
})

usuarioSchema.pre('save',(next)=>{
  let usuario= this
  if(!usuario.isModified('contrasena')) return next()

  bcrypt.genSalt(10,(err,salt)=>{
      if(err) return next()

      bcrypt.hash(usuario.contrasena,salt,null,(err,hash)=>{
          if(err) return next(err)

          usuario.contrasena =hash
          next()
      })
  })
})

module.exports = mongoose.model('usuario', usuarioSchema)
