import { errorHandler } from './errors'
import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import User from './model/user.model'
import Admin from './model/admin.model'

import loginRouter from './routes/login.routes'
import userRouter from './routes/user.routes'
import adminRouter from './routes/admin.routes'
import documentsRouter from './routes/documents.routes'
import skillRouter from './routes/skills.routes'
import experienceRouter from './routes/experience.routes'
import coursesRouter from './routes/courses.routes'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/login', loginRouter)
app.use('/users', userRouter)
app.use('/admin', adminRouter)
app.use('/document', documentsRouter)
app.use('/skill', skillRouter)
app.use('/experience', experienceRouter)
app.use('/course', coursesRouter)

app.use(errorHandler)
export default app;
