import { Router } from 'express'
import checkCredentialsMiddleware from '../middleware/delete/checkCredentials.middleware'
import deleteController from '../controllers/delete.controller'
import { deleteSchema } from '../schemas/delete.schema'
import verifyShape from '../schemas/verifyShape.middleware'
import checkUserExistenceMiddleware from '../middleware/delete/checkUserExistence.middleware'

const deleteRouter = Router()

deleteRouter.delete('', verifyShape(deleteSchema), checkCredentialsMiddleware, checkUserExistenceMiddleware, deleteController)

export default deleteRouter