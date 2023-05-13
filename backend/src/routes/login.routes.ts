import { Router } from 'express';
import verifyShape from '../schemas/verifyShape.middleware';
import loginSchema from '../schemas/login.schema';
import checkLoginMiddleware from '../middleware/login/checkLogin.middleware';
import loginController from '../controllers/login.controller';

const loginRouter = Router();

//Login de usuários
loginRouter.post('', verifyShape(loginSchema), checkLoginMiddleware, loginController)
//Esqueci minha senha - usuários
loginRouter.post('/forgot')

//Login de administradores
loginRouter.post('/admin', verifyShape(loginSchema))
//Esqueci minha senha - administradores
loginRouter.post('/admin/forgot')

export default loginRouter;