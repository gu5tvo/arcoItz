import mongoose from 'mongoose'
import { v4 as uuidv4 } from 'uuid'
import { hash } from 'bcryptjs'

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        default: uuidv4()
    },
    avatar: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: false
    },
    area: {
        type: String,
        required: false,
        ref: 'Areas'
    },
    address: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: false
    },
    pronnouns: {
        type: String,
        required: false
    },
    isActive: {
        type: Boolean,
        default: true
    }
})

const User = mongoose.model('user', userSchema)

export default User
