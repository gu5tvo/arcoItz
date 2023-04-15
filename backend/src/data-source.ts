import mongoose from 'mongoose'
import 'dotenv/config'

export const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('[INFO]: Conectado ao banco de dados.');
    } catch (err) {
        console.log(err);
    }
}

export default connect