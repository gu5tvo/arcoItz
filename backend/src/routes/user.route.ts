import { Router } from 'express'
import checkInputRegisterMiddleware from '../middleware/register/checkInput.middleware'
import registerController from '../controller/register/register.controller'

const userRoutes = Router()

userRoutes.post('', checkInputRegisterMiddleware, registerController)

export default userRoutes