import dotenv from 'dotenv'

dotenv.config();

console.log(process.env.HOLA)
export default {
    MONGO_DB: 'zapatos',
    MONGO_USER: 'urbe',
    MONGO_PASS: 'admin',
    MONGO_HOST: 'localhost'
}