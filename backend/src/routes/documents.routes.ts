import { Router } from 'express';
//Controllers
import {
    insertDocumentController, deleteDocumentController, editDocumentController
} from '../controllers/documents.controllers';
//Middlewares
import verifyTokenMiddleware from '../middleware/login/checkToken.middleware';
import checkPropertyMiddleware from '../middleware/documents/checkProperty.middleware';
//Serializers
import verifyShape from '../schemas/verifyShape.middleware';
import {createDocument, editDocument} from '../schemas/documents.schema'

const documentsRouter = Router();
//Cadastra um documento
documentsRouter.post('', verifyShape(createDocument), verifyTokenMiddleware, insertDocumentController)
//Edita um documento específico
documentsRouter.patch('/:id', verifyShape(editDocument), verifyTokenMiddleware, checkPropertyMiddleware, editDocumentController)
//Deleta um documento específico
documentsRouter.delete('/:id', verifyTokenMiddleware, checkPropertyMiddleware, deleteDocumentController)

export default documentsRouter;