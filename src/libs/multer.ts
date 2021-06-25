import multer from 'multer'
import {v4 as uuidv4} from 'uuid'
import path from 'path'
const random = uuidv4()

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req,file,cb) => {
        cb(null, random + path.extname(file.originalname))
    }
})

export default multer({storage});