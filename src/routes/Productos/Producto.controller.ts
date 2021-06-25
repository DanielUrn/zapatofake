import {RequestHandler} from 'express'
import Producto from './Producto'


export const newProducto: RequestHandler = async (req, res) => {
    
    console.log(req.body)
    const nuevoproducto = new Producto(req.body)
    
    try{
        const saved = await nuevoproducto.save()
        res.send(saved)
    }catch(error){
        console.log(error)
    }
}

export const getProductos: RequestHandler = async (req, res) => {
    const Productos = await Producto.find()
    if(Productos.length == 0 ) return res.json('No hay productos')
    return res.json(Productos)
}

export const getProducto: RequestHandler = (req, res) => {
    res.send('Mardicion')
}

export const upProducto: RequestHandler = (req, res) => {
    res.send('Mardicion')
}

export const delProducto: RequestHandler = (req, res) => {
    res.send('Mardicion')
}
