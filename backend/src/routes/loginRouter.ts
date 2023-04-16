import { Router } from 'express'
import checkInputLoginMiddleware from '../middleware/login/checkInput.middleware'
import loginController from '../controllers/login.controller'

const userRoutes = Router()

userRoutes.post('', checkInputLoginMiddleware, loginController)

export default userRoutes