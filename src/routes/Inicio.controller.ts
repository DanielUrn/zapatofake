import {RequestHandler} from 'express'

export const getInicio: RequestHandler = async (req, res) => {

    try{
        res.send('<form action="/productos" method="post" enctype="multipart/form-data"> <input type="file" name="imagen" /> <button type="submit"> Enviar </button> </form>')
    }catch(error){
        console.log(error)
    }
}


