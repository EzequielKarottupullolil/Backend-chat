const {Schema,model} = require('mongoose');

const userSchema = new Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    listaDeAmigos:{
        type:String
    }
    ,
    salt:{
        type:String,
        required:true,
    }
},{
    timestamps:false
});

module.exports = model('usuarios',userSchema);
