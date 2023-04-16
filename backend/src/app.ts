import express from 'express'
import 'express-async-errors'
import cors from 'cors'

import loginRouter from './routes/loginRouter'

import { errorHandler } from './errors'
const app = express()
app.use(cors())
app.use(express.json())

// mapeamento da rota '/login' para o roteador loginRouter (operação do tipo POST)
app.use('/login', loginRouter)

app.use(errorHandler)
export default app;