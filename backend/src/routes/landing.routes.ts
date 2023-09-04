import { Router } from 'express';
const landingRouter = Router();

// Envia email com mensagem para diversitrampos
landingRouter.post('/:token')

export default landingRouter;