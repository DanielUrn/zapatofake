import express from 'express'
import Producto from './routes/Producto.routes'

const app = express()
app.set('port',3001)

app.use(Producto)

export default app