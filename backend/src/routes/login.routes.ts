import { Router } from 'express';
import verifyShape from '../schemas/verifyShape.middleware';
import loginSchema, { emailSchema, resetSchema } from '../schemas/login.schema';
import checkLoginMiddleware from '../middleware/login/checkLogin.middleware';
import loginController, {confirmEmailController, recoverPasswordController, sendResetController, validateTokenController} from '../controllers/login.controller';
import verifyMailMiddleware from '../middleware/login/verifyMail.middleware';
import verifyResetMiddleware from '../middleware/login/verifyReset.middleware';
import checkTokenMiddleware from '../middleware/login/checkToken.middleware'
import checkRegisterMiddleware from '../middleware/users/checkRegister.middleware';
const loginRouter = Router();

//Login de usuários
loginRouter.post('', verifyShape(loginSchema), checkLoginMiddleware, loginController)
//Esqueci minha senha - usuários
loginRouter.post('/forgot', verifyShape(emailSchema), verifyMailMiddleware, sendResetController)
//Rota para recuperar a senha
loginRouter.post('/reset/:token', verifyShape(resetSchema), verifyResetMiddleware, recoverPasswordController)
// Validar token utilizado na recuperação de senha
loginRouter.get('/:token', checkTokenMiddleware, validateTokenController)

loginRouter.post('/confirmEmail', verifyShape(emailSchema), checkRegisterMiddleware, confirmEmailController)
export default loginRouter;