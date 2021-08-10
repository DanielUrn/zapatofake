import {Schema, model} from 'mongoose'

const roles = new Schema({
    nombre: {
        type: String,
        required: true
    }
},{versionKey:false})

export default model('Rol',roles)