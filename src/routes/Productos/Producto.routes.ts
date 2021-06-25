import {Router} from 'express'
import * as Productos from './Producto.controller'
import multer from '../../libs/multer'
const router = Router()

router.get('/productos', Productos.getProductos)

router.get('/productos/:id', Productos.getProducto)

router.delete('/productos/:id', Productos.delProducto)

router.post('/productos', multer.single('imagen'), Productos.newProducto)

router.put('/productos/:id', Productos.upProducto)

export default router;