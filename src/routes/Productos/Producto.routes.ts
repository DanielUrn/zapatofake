import {Router} from 'express'
import * as Productos from '../../controllers/Productos/Producto.controller'
import multer from '../../libs/multer'
const router = Router()

router.get('/productos', Productos.getProductos)

router.get('/productos/:id', Productos.getProducto)

router.get('/woman', Productos.woman)

router.get('/male', Productos.male)

router.delete('/productos/:id', Productos.delProducto)

router.post('/productos', multer.single('imagen'), Productos.newProducto)

router.put('/productos/:id', multer.single('imagen'), Productos.upProducto)

export default router;