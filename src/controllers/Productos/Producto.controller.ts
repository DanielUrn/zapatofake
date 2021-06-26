import {RequestHandler} from 'express'
import Producto from '../../models/Productos/Producto'
import path from 'path'
import fs from 'fs-extra'

export const newProducto: RequestHandler = async (req, res) => {
    const {nombre, descripcion, precio} = req.body
    
    if(req.file){
        const ext = req.file.mimetype
        const nuevoproducto = new Producto({
            nombre:nombre,
            descripcion:descripcion,
            precio:precio,
            imgpath:req.file.path
        })
        if(ext == ('image/jpeg' || 'image/png')){
            const saved = await nuevoproducto.save()
            res.json(saved)
        }else{
            await fs.unlink(path.resolve(nuevoproducto.imgpath))
            res.json('Todo mal')
        }
    }
    else{
        res.json('Todo mal')
    }

}

export const getProductos: RequestHandler = async (req, res) => {
    const Productos = await Producto.find()
    if(Productos.length == 0 ) return res.json('No hay productos')
    return res.json(Productos)
}

export const getProducto: RequestHandler = async (req, res) => {
    const found = await Producto.findById(req.params.id)
    res.json(found)
}

export const upProducto: RequestHandler = async (req, res) => {
    const actualizado = await Producto.findByIdAndUpdate(req.params.id,req.body, {
        new: true
    })
    res.json(actualizado)
}

export const delProducto: RequestHandler = async (req, res) => {
    const found = await Producto.findByIdAndDelete(req.params.id)
    await fs.unlink(path.resolve(found.imgpath))
    res.json(found)
}
