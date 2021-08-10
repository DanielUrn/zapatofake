//IMPORTS
import express from 'express'
import {Roles} from './libs/setup'
import Productorutas from './routes/Productos/Producto.routes'
import Iniciorutas from './routes/Inicio.routes'
import Authrutas from './routes/Auth/auth.routes'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
//APP
const app = express();
Roles();
//APP CONFIGURACIONES
app.set('port',3001);


//MIDDLEWARE
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//RUTAS
app.use(Iniciorutas);
app.use(Productorutas);
app.use(Authrutas)
app.use('./uploads', express.static(path.resolve('uploads')))


export default app;