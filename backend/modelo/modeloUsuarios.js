const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt=require('bcrypt');
const bcryptjs=require('bcrypt-nodejs');

const usuarioSchema= new Schema({
    nombre: String,
    apellidos: String,
    cc:Number,
    correo: {type:String, unique:true, lowercase:true},
    contrasena: {type: String, select:false},
})

    usuarioSchema.methods.compareContrasena = function (contrasenaCandidata, cb) {
        bcrypt.compare(contrasenaCandidata, this.contrasena, (err, iguales) => {
            cb(err, iguales)
        });
    }

usuarioSchema.pre('save',function(next){
    if (!this.isModified('password')) return next()
    let usuario=this
    console.log(usuario)
    bcryptjs.hash(usuario.contrasena,null,null,(err,hash)=>{
          if(err) console.log(err)
          usuario.contrasena =hash
          console.log(hash)
      })
    next()
});

module.exports = mongoose.model('usuario', usuarioSchema);