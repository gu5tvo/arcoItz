import { Router } from 'express';

const adminRouter = Router();

//Autentica admin
adminRouter.get('/login')

//Recupera senha admin
adminRouter.post('/recover')

//Adiciona cidades
adminRouter.post('/city')

//Adiciona áreas de serviço
adminRouter.post('/service-area')




export default adminRouter;