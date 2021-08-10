import {RequestHandler} from 'express'
import Usuario from '../../models/Usuarios/usuarios'
import Rol from '../../models/Usuarios/roles'
import b from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from '../../config'

const encriptar = async (contra:string) => {
    const salt = await b.genSalt(10)
    return await b.hash(contra, salt)
}

const comparar = async (contra:string,recibida:string) => {
    return await b.compare(recibida,contra)
}

export const signup:RequestHandler = async (req,res) => {
    const {usuario,correo,contra,rol} = req.body
    const registrar = new Usuario({
        usuario:usuario,
        correo:correo,
        contra: await encriptar(contra) 
    })

    if(rol && (rol.lenght>0)){
        const found =  await Rol.find({nombre: {$in:rol} })
        registrar.rol = found.map((Rol: { _id: any }) => Rol._id)
    }else{
        const found = await Rol.findOne({nombre: "usuario"})
        console.log(found)
        registrar.rol = [found._id]
    }
    const saved = await registrar.save()

    const token = jwt.sign({id:saved._id}, config.SECRET, {
        expiresIn:86400 //24 horas
    })
    console.log(saved)
    return res.json(token)

}

export const login:RequestHandler = async (req,res) => {
    const {usuario,correo, contra} = req.body
    const ingresar = await Usuario.findOne({correo: correo})
    if(!ingresar) res.status(400).json('No existe su correo')
    const coincide = await comparar(ingresar.contra,contra)

    if(!coincide) return res.status(401).json({
        mensaje:"Datos inválidos",
        token: null
    })
    jwt.sign({id: ingresar._id}, config.SECRET,{
        expiresIn:86400
    })
}