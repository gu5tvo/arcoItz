import { Router } from 'express'
import checkCredentialsMiddleware from '../middleware/editProfile/checkCredentials.middleware'
import verifyShape from '../schemas/verifyShape.middleware'
import { editProfileSchema } from '../schemas/editProfile.schema'
import editProfileController from '../controllers/editProfile.controller'

const editProfileRouter = Router()

editProfileRouter.post('/:id', verifyShape(editProfileSchema), checkCredentialsMiddleware, editProfileController)

export default editProfileRouter