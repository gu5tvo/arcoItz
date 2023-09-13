
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
import multer from 'multer';
import path from 'path';

const documentsRouter = Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, "uploads")); 
    },
  });
  const upload = multer({ storage: storage });
  
//Cadastra um documento
documentsRouter.post('/', verifyShape(createDocument), verifyTokenMiddleware, upload.single('file'), insertDocumentController);
documentsRouter.patch('/:id', verifyShape(editDocument), verifyTokenMiddleware, checkPropertyMiddleware, editDocumentController);
documentsRouter.delete('/:id', verifyTokenMiddleware, checkPropertyMiddleware, deleteDocumentController);


export default documentsRouter;