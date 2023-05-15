import { Router } from 'express';
const skillsRouter = Router();
//Controllers
import {deleteSkillController, registerSkillController} from '../controllers/skills.controllers';
//Middlewares
import checkTokenMiddleware from '../middleware/login/checkToken.middleware';
import checkPropertyMiddleware from '../middleware/skills/checkProperty.middleware';
//Serializers
import verifyShape from '../schemas/verifyShape.middleware';
import {createSkill} from '../schemas/skills.schema';

//Cadastra uma habilidade
skillsRouter.post('', verifyShape(createSkill), checkTokenMiddleware, registerSkillController)
//Deleta uma habilidade
skillsRouter.delete('/:id', checkTokenMiddleware, checkPropertyMiddleware, deleteSkillController)

export default skillsRouter;