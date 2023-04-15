import mongoose from 'mongoose'

const areaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const Area = mongoose.model('area', areaSchema)

export default Area