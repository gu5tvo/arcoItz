import mongoose from 'mongoose';
import {v4 as uuidv4} from 'uuid';

const documentSchema = new mongoose.Schema({
    id: {
        type: String,
        default: uuidv4()
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    document: {
        type: String,
        required: true
    },
    ownerId: {
        type: String,
        required: true,
        ref: 'User'
    }
})

const Document = mongoose.model('document', documentSchema)
export default Document;