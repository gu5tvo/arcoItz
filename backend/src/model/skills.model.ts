import mongoose from "mongoose";
import {v4 as uuidv4} from 'uuid';

const skillsSchema = new mongoose.Schema({
    id: {
        type: String,
        default: uuidv4()
    },
    name: {
        type: String,
        required: true,
    },
    ownerId: {
        type: String,
        required: true,
    }
})

const Skills = mongoose.model("Skills", skillsSchema);
export default Skills;