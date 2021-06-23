import {Router} from 'express'
const router = Router()

router.get('/producto', (req,res) =>{
    res.json('obteniendo vergas')
})

export default router;