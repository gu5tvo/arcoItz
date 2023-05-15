import { Router } from 'express';
//Middlewares
import verifyShape from '../schemas/verifyShape.middleware';
import checkExistenceMiddleware from '../middleware/users/checkExistence.middleware';
import checkRegisterMiddleware from '../middleware/users/checkRegister.middleware';
import checkTokenMiddleware from '../middleware/login/checkToken.middleware';
import verifyMailMiddleware from '../middleware/users/verifyMail.middleware';
import sanitizePagesMiddleware from '../middleware/users/sanitizePages.middleware';
//Schemas
import { registerSchema, updateSchema } from '../schemas/users.schema';
//Controllers
import { 
    displaySelfController, displayProfileController,
    registerUserController, deleteProfileController,
    updateProfileController, displayAllUsersController
} from '../controllers/users.controllers'

const userRouter = Router();

//Lista o próprio perfil.
userRouter.get('', checkTokenMiddleware, displaySelfController)
//Lista todos os usuários
userRouter.get('/all', sanitizePagesMiddleware, displayAllUsersController)
//Cadastra um usuário
userRouter.post('', verifyShape(registerSchema), checkRegisterMiddleware, registerUserController)
//Lista um perfil específico
userRouter.get('/:id', checkExistenceMiddleware, displayProfileController)
//Atualiza o próprio perfil
userRouter.patch('', verifyShape(updateSchema), checkTokenMiddleware, verifyMailMiddleware, updateProfileController)
//Remove o próprio usuário
userRouter.delete('', checkTokenMiddleware, deleteProfileController)

export default userRouter;