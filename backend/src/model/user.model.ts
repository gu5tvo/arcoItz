import mongoose from 'mongoose'
import { v4 as uuidv4 } from 'uuid'

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        default: uuidv4
    },
    avatar: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true,
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
        required: false,
        default: null
    },
    area: {
        type: String,
        required: false,
        ref: 'Areas',
        default: null
    },
    address: {
        type: String,
        required: false,
        default: null
    },
    title: {
        type: String,
        required: false,
        default: null
    },
    number: {
        type: String,
        required: false,
        default: null
    },
    gender: {
        type: String,
        required: false,
        default: null
    },
    pronnouns: {
        type: String,
        required: false,
        default: null
    },
    city:{
        type: String,
        required: false,
        default: null
    },
    instagram:{
        type: String,
        required: false,
        default: null
    },
    linkedin:{
        type: String,
        required: false,
        default: null
    },
    portfolio:{
        type: String,
        required: false,
        default: null
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isBanned: {
        type: Boolean,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: new Date
    },
    updatedAt: {
        type: Date,
        default: new Date
    }
})

const User = mongoose.model('user', userSchema)

export default User
