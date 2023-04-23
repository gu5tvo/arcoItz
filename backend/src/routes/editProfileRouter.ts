import { Router } from 'express'
import checkCredentialsMiddleware from '../middleware/editProfile/checkCredentials.middleware'
import verifyShape from '../schemas/verifyShape.middleware'
import { editProfileSchema } from '../schemas/editProfile.schema'

const editProfileRouter = Router()

editProfileRouter.post('', verifyShape(editProfileSchema), checkCredentialsMiddleware)

export default editProfileRouter