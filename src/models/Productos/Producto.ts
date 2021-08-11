import {Schema,model} from 'mongoose'

const productoschema = new Schema({
    nombre: {
        type: String, required:false,
        trim: true
    },

    descripcion: {
        type: String
    },

    precio: {
        type: Number, required:false,
    },

    para: {
        type: String, required:true
    },

    imgpath: {
        type: String, required:false
    }

}, {
    versionKey:false,
    timestamps:true
})

export default model('Producto',productoschema);