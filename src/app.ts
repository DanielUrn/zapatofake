//IMPORTS
import express from 'express'
import Productorutas from './routes/Productos/Producto.routes'
import Inicio from './routes/Inicio.routes'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
//APP
const app = express();

//APP CONFIGURACIONES
app.set('port',3001);


//MIDDLEWARE
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//RUTAS
app.use(Inicio);
app.use(Productorutas);
app.use('./uploads', express.static(path.resolve('uploads')))


export default app;