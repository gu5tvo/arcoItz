import express from 'express'
import listUsersController from '../controllers/listUsers.controller'

const listUsersRouter = express()

listUsersRouter.get('', listUsersController)

export default listUsersRouter