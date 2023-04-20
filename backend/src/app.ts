import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import { errorHandler } from './errors'
import registerRouter from './routes/user.route'

const app = express()
app.use(cors())
app.use(express.json())

//Essa linha de código adiciona um roteador para a aplicação Express na rota /register,
// o que significa que as solicitações feitas nessa rota serão tratadas 
//pelo conjunto de manipuladores de rota e middleware associados ao registerRouter.
app.use('/register', registerRouter)

app.use(errorHandler)
export default app;