import {Schema,model} from 'mongoose'

const productoschema = new Schema({
    nombre: {
        type: String, required:false,
        trim: true
    },

    descirpcion: {
        type: String
    },

    precio: {
        type: Number, required:false,
    },

    imagen: {
        type: String, required:false,
        data: Buffer
    }

}, {
    versionKey:false,
    timestamps:true
})

export default model('Producto',productoschema);