import {Schema,model} from 'mongoose'

const userSchema = new Schema({
    usuario: {
        type: String,
        required:true,
        unique:true
    },
    correo: {
        type: String,
        required:true,
        unique:true
    },
    contra: {
        type: String,
        required:true
    },
    rol: [{
        ref:"Rol",
        type: Schema.Types.ObjectId
    }],
    },
    {   
        timestamps:true,
        versionKey:false
    }
);

export default model('Usuario',userSchema);