import {Router} from 'express'
import * as Index from './Inicio.controller'
const router = Router()

router.get('/', Index.getInicio)

export default router;