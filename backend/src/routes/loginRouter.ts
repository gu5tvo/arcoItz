import { Router } from 'express'
import checkInputLoginMiddleware from './../middleware/login/checkInput.middleware'
import loginController from '../controllers/login.controller'
import verifyShape from '../schemas/verifyShape.middleware'
import { loginSchema } from '../schemas/login.schema'

const userRoutes = Router()

userRoutes.post('', verifyShape(loginSchema), checkInputLoginMiddleware, loginController)

export default userRoutes