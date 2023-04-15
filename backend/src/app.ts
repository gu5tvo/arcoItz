import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import { errorHandler } from './errors'
const app = express()
app.use(cors())
app.use(express.json())





app.use(errorHandler)
export default app;