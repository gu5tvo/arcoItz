import { Router } from 'express'
import checkInputRegisterMiddleware from '../middleware/register/checkInput.middleware'
import registerController from '../controllers/register.controller'
import verifyShape from '../schemas/verifyShape.middleware'
import { registerSchema } from '../schemas/register.schema'

const registerRouter = Router()

registerRouter.post('', verifyShape(registerSchema), checkInputRegisterMiddleware, registerController)

export default registerRouter