import mongoose from "mongoose";
import {v4 as uuidv4} from 'uuid';

const experienceSchema = new mongoose.Schema({
    id: {
        type: String,
        default: uuidv4
    },
    title: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: false,
    },
    location: {
        type: String,
        required: false,
    },
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    ownerId: {
        type: String,
        required: true,
    }
})

const Experience = mongoose.model("Experience", experienceSchema);
export default Experience;