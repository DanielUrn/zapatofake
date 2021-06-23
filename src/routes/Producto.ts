import {Schema,model} from 'mongoose'

const productoschema = new Schema({
    nombre: {
        type: String, required:true,
        trim: true
    },

    descirpcion: {
        type: String,
        data: Buffer
    },

    precio: {
        type: Number, required:true,
    },

    imagen: {
        type: String, required:true,
        data: Buffer
    }

}, {
    versionKey:false,
    timestamps:true
})

export default model('Producto',productoschema);