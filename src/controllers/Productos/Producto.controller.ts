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
            try {
                const saved = await nuevoproducto.save()
                if(saved) return res.json(saved)
            } catch (error) {
                return res.json(error)                
            }
            
        }else{
            try {
                await fs.unlink(path.resolve(nuevoproducto.imgpath))
                return res.json('Trató de subir un archivo que no era una imagen')
            } catch (error) {
                return res.json(error);
            }
            
        }
    }
    else{
        return res.json('Trató de subir un producto sin imagen')
    }

}

export const getProductos: RequestHandler = async (req, res) => {
    try {
        const Productos = await Producto.find()
        if(Productos.length == 0 ) return res.json('No hay productos')
        return res.json(Productos)
    } catch (error) {
        return res.json(error)
    }
    
    
}

export const getProducto: RequestHandler = async (req, res) => {
    try {
        const found = await Producto.findById(req.params.id)
        if(found) return res.json(found)
        else res.json('Su producto no existe')
    } catch (error) {
        return res.json(error)
    }
    
}

export const upProducto: RequestHandler = async (req, res) => {
    if(req.file){    
            try{
                const imagen = await Producto.findById(req.params.id)
                const actualizar = {
                    nombre:req.body.nombre || imagen.nombre,
                    descripcion:req.body.descripcion || imagen.descripcion,
                    precio: req.body.precio || imagen.precio,
                    imgpath:req.file.path
                }
                await fs.unlink(path.resolve(imagen.imgpath))
                const actualizado = await Producto.findByIdAndUpdate(req.params.id,actualizar, {new: true})
                return res.json(actualizado)
            }catch(error){
                await fs.unlink(path.resolve(req.file.path))
                return res.json('Su producto no pudo ser actualizado');
                
            }       
    }else{
        try {
            const actualizado = await Producto.findByIdAndUpdate(req.params.id,req.body, {new: true})
            if(!actualizado) return res.json('No existe el producto que está buscando')
            return res.json(actualizado)
        }catch (error) {return res.json('No existe el producto que está buscando')}
    }
}

export const delProducto: RequestHandler = async (req, res) => {
    const found = await Producto.findByIdAndDelete(req.params.id)
    await fs.unlink(path.resolve(found.imgpath))
    return res.json(found)
}
