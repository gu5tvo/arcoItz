import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const courseSchema = new mongoose.Schema({
    id:{
        type: String,
        default: uuidv4
    },
    name:{
        type: String,
        required: true
    },
    institution:{
        type: String,
        required: true
    },
    from:{
        type: String,
        required: true
    },
    to:{
        type: String,
        required: false
    },
    description:{
        type: String,
        required: false
    },
    ownerId: {
        type: String,
        required: true
    }
})

const Course = mongoose.model('Course', courseSchema);
export default Course;