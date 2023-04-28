import { errorHandler } from './errors'
import express from 'express'
import 'express-async-errors'
import cors from 'cors'

import loginRouter from './routes/login.routes'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/login', loginRouter)
app.use('/users')
app.use('/admin')


app.use(errorHandler)
export default app;
