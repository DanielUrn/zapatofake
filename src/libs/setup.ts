import Rol from '../models/Usuarios/roles'


export const Roles = async () => {
    const count = await Rol.estimatedDocumentCount()
    if(count >0) return;
    const values = await Promise.all([
        new Rol({nombre: 'usuario'}).save(),
        new Rol({nombre: 'moderador'}).save(),
        new Rol({nombre: 'admin'}).save()
    ])
    
}