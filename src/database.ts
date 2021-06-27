import mongoose from 'mongoose'
import config from './config';

(async () => {
    try{
        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DB}`,{
            useUnifiedTopology: true,
            useNewUrlParser: true ,
            useFindAndModify:false   
            }
        );
    }catch{
        console.error('mardicion')
    }
})()

