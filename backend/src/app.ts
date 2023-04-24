import express from 'express'
import 'express-async-errors'
import cors from 'cors'

import { errorHandler } from './errors'

import loginRouter from './routes/loginRouter'
import registerRouter from './routes/registerRouter'
import deleteRouter from './routes/deleteRouter'
import editProfileRouter from './routes/editProfileRouter'
import specificProfileRouter from './routes/specificProfileRouter'

const app = express()
app.use(cors())
app.use(express.json())

// Rotas
app.use('/login', loginRouter)
app.use('/register', registerRouter)
app.use('/delete', deleteRouter)
app.use('/editProfile', editProfileRouter)
app.use('/specificProfile', specificProfileRouter)


app.use(errorHandler)
export default app;
