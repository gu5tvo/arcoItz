import { Router } from 'express';
//Middlewares
import verifyShape from '../schemas/verifyShape.middleware';
import checkExistenceMiddleware from '../middleware/users/checkExistence.middleware';
import checkRegisterMiddleware from '../middleware/users/checkRegister.middleware';
import checkTokenMiddleware from '../middleware/login/checkToken.middleware';
import verifyMailMiddleware from '../middleware/users/verifyMail.middleware';
import sanitizePagesMiddleware from '../middleware/users/sanitizePages.middleware';
//Schemas
import { registerSchema, updateSchema, documentSchema } from '../schemas/users.schema';
//Controllers
import { 
    displaySelfController, displayProfileController,
    registerUserController, deleteProfileController,
    updateProfileController, displayAllUsersController,
    insertDocumentController
} from '../controllers/users.controllers'

const userRouter = Router();

//Lista o próprio perfil.
userRouter.get('', checkTokenMiddleware, displaySelfController)
//Lista todos os usuários
userRouter.get('/all', sanitizePagesMiddleware, displayAllUsersController)
//Lista um perfil específico
userRouter.get('/:id', checkExistenceMiddleware, displayProfileController)
//Cadastra um usuário
userRouter.post('', verifyShape(registerSchema), checkRegisterMiddleware, registerUserController)
//Adiciona um documento
userRouter.put('/document', verifyShape(documentSchema),checkTokenMiddleware, insertDocumentController)
//Atualiza o próprio perfil
userRouter.patch('', verifyShape(updateSchema), checkTokenMiddleware, verifyMailMiddleware, updateProfileController)
//Remove o próprio usuário
userRouter.delete('', checkTokenMiddleware, deleteProfileController)

export default userRouter;