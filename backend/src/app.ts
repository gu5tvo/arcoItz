import { errorHandler } from './errors'
import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import User from './model/user.model'
import Admin from './model/admin.model'

import loginRouter from './routes/login.routes'
import userRouter from './routes/user.routes'
import adminRouter from './routes/admin.routes'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/login', loginRouter)
app.use('/users', userRouter)
app.use('/admin', adminRouter)

app.get('/clean', (req, res)=>{
    User.deleteMany({}).then(()=>{
        new Admin({
            name: 'admin',
            email: 'admin@mail.com',
            password: '321nimda'
        })
    })
})


app.use(errorHandler)
export default app;
