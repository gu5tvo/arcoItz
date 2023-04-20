import { Router } from 'express'
import checkInputRegisterMiddleware from '../middleware/register/checkInput.middleware'
import registerController from '../controller/register/register.controller'

// Cria uma instância de rota do Express
const userRoutes = Router()

// Define uma rota POST com a URL vazia que executa o middleware checkInputRegisterMiddleware e o controlador registerController
userRoutes.post('', checkInputRegisterMiddleware, registerController)

// Exporta a instância de rota do Express para uso em outros arquivos
export default userRoutes