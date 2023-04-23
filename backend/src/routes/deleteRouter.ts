import { Router } from 'express'
import checkCredentialsMiddleware from '../middleware/delete/checkCredentials.middleware'
import deleteController from '../controllers/delete.controller'

const deleteRouter = Router()

deleteRouter.delete('', checkCredentialsMiddleware, deleteController)

export default deleteRouter