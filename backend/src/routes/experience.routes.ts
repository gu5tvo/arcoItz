import { Router } from 'express';
const experienceRouter = Router();
//Controllers
import {
    deleteExperienceController, editExperienceController, registerExperienceController
} from '../controllers/experiences.controllers'
//Middlewares
import checkTokenMiddleware from '../middleware/login/checkToken.middleware';
import checkPropertyMiddleware from '../middleware/experience/checkProperty.middleware';
//Serializers
import verifyShape from '../schemas/verifyShape.middleware';
import {registerExperience, updateExperience} from '../schemas/experience.schema'

//Cadastra uma experiência
experienceRouter.post('', verifyShape(registerExperience), checkTokenMiddleware, registerExperienceController)
//Atualiza uma experiência
experienceRouter.patch('/:id', verifyShape(updateExperience), checkTokenMiddleware, checkPropertyMiddleware, editExperienceController)
//Deleta uma experiência
experienceRouter.delete('/:id', checkTokenMiddleware, checkPropertyMiddleware, deleteExperienceController)

export default experienceRouter;