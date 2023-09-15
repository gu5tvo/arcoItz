import { Router } from 'express';
import verifyShape from '../schemas/verifyShape.middleware';
import { suportSchema } from '../schemas/landing.schema';
import { sendSuportMessageController } from '../controllers/landing.controllers';

const landingRouter = Router();

// Envia mensagem  de suport para o email da diversitrampos
landingRouter.post('' , verifyShape(suportSchema), sendSuportMessageController)

export default landingRouter;