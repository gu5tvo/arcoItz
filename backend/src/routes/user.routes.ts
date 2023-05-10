import { Router } from 'express';
//Middlewares
import checkLoginMiddleware from '../middleware/login/checkLogin.middleware';
import verifyShape from '../schemas/verifyShape.middleware';
import checkExistenceMiddleware from '../middleware/users/checkExistence.middleware';
import checkRegisterMiddleware from '../middleware/users/checkRegister.middleware';
import checkTokenMiddleware from '../middleware/login/checkToken.middleware';
import verifyMailMiddleware from '../middleware/users/verifyMail.middleware';
//Schemas
import { registerSchema, updateSchema } from '../schemas/users.schema';
//Controllers
import { 
    displaySelfController, displayProfileController,
    registerUserController, deleteProfileController,
    updateProfileController
} from '../controllers/users.controllers'

const userRouter = Router();

//Lista o próprio perfil.
userRouter.get('', checkLoginMiddleware, checkTokenMiddleware, displaySelfController)
//Lista um perfil específico
userRouter.get('/:id', checkExistenceMiddleware, displayProfileController)
//Cadastra um usuário
userRouter.post('', verifyShape(registerSchema), checkRegisterMiddleware, registerUserController)
//Atualiza o próprio perfil
userRouter.patch('', verifyShape(updateSchema), checkTokenMiddleware, verifyMailMiddleware, updateProfileController)
//Atualiza a foto de perfil do próprio usuário
userRouter.put('/avatar')
//Remove o próprio usuário
userRouter.delete('', checkTokenMiddleware, deleteProfileController)

export default userRouter;