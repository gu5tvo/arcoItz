import { Router } from 'express'
import checkCredentialsMiddleware from '../middleware/editProfile/checkCredentials.middleware'

const editProfileRouter = Router()

editProfileRouter.use('', checkCredentialsMiddleware)

export default editProfileRouter