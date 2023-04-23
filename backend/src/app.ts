import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import { errorHandler } from './errors'
import registerRouter from './routes/user.route'

const app = express()
app.use(cors())
app.use(express.json())

// Rotas
app.use('/register', registerRouter)

app.use(errorHandler)
export default app;