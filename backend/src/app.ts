import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import { errorHandler } from './errors'
import registerRouter from './routes/user.route'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/register', registerRouter)

// http://localhost:5173/register

// {
//     "name":"edgar",
//     "email":"nada1@hotmail.com",
//     "password":"edgar123"
// }



/*

{
	"user": {
		"id": "62fba418-5113-4319-aa63-e6d8bc5fd2a6",
		"name": "edgar",
		"email": "nada23@hotmail.com",
		"password": "$2a$12$4nnYXHrtM0.9FsmX/Jw0FuVTcGUlbjICgnHHnYT6zEmLPfK5cLMeK",
		"_id": "643b5b672c21a5b8149b3a78"
	}
}
*/

app.use(errorHandler)
export default app;