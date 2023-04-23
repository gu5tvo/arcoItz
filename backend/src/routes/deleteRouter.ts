import express from 'express'
import checkCredentialsMiddleware from '../middleware/delete/checkCredentials.middleware'
import deleteController from '../controllers/delete.controller'

const deleteRouter = express()

deleteRouter.delete('', checkCredentialsMiddleware, deleteController)

export default deleteRouter