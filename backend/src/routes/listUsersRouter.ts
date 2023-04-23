import { Router } from 'express'
import listUsersController from '../controllers/listUsers.controller'

const listUsersRouter = Router()

listUsersRouter.get('', listUsersController)

export default listUsersRouter