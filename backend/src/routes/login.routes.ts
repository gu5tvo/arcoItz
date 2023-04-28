import { Router } from 'express';
import verifyShape from '../schemas/verifyShape.middleware';
import loginSchema from '../schemas/login.schema';
import checkLoginMiddleware from '../middleware/login/checkLogin.middleware';

const loginRouter = Router();

//Login de usuários
loginRouter.post('', verifyShape(loginSchema), checkLoginMiddleware)
//Login de administradores
loginRouter.post('/admin', verifyShape(loginSchema))

export default loginRouter;