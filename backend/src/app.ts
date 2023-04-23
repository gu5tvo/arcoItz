import express from 'express'
import 'express-async-errors'
import cors from 'cors'

import { errorHandler } from './errors'

import loginRouter from './routes/loginRouter'
import registerRouter from './routes/registerRouter'

const app = express()
app.use(cors())
app.use(express.json())

// Rotas
app.use('/login', loginRouter)
app.use('/register', registerRouter)

app.use(errorHandler)
export default app;
