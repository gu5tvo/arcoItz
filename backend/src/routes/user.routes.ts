import { Router } from 'express';
import checkLoginMiddleware from '../middleware/login/checkLogin.middleware';
import verifyShape from '../schemas/verifyShape.middleware';
import { registerSchema } from '../schemas/users.schema';
import checkExistenceMiddleware from '../middleware/users/checkExistence.middleware';
import checkRegisterMiddleware from '../middleware/users/checkRegister.middleware';
import { 
    displaySelfController, displayProfileController,
    registerUserController, deleteProfileController
} from '../controllers/users.controllers'
import checkTokenMiddleware from '../middleware/login/checkToken.middleware';

const userRouter = Router();

//Lista o próprio perfil.
userRouter.get('', checkLoginMiddleware, checkTokenMiddleware, displaySelfController)
//Lista um perfil específico
userRouter.get('/:id', checkExistenceMiddleware, displayProfileController)
//Cadastra um usuário
userRouter.post('', verifyShape(registerSchema), checkRegisterMiddleware, registerUserController)
//Atualiza o próprio perfil
userRouter.patch('')
//Atualiza a foto de perfil do próprio usuário
userRouter.put('/avatar')
//Remove o próprio usuário
userRouter.delete('', checkTokenMiddleware, deleteProfileController)

export default userRouter;