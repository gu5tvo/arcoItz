import { Router } from 'express';
const coursesRouter = Router();
//Controllers
import {
    registerCourseController, editCourseController, deleteCourseController
} from  '../controllers/courses.controllers'
//Serializers
import verifyShape from '../schemas/verifyShape.middleware';
import { createCourseSchema, editCourseSchema } from '../schemas/courses.schemas';
//Middlewares
import checkTokenMiddleware from '../middleware/login/checkToken.middleware';
import checkPropertyMiddleware from '../middleware/courses/checkProperty.middleware';

//Cadastra um curso
coursesRouter.post('', verifyShape(createCourseSchema), checkTokenMiddleware, registerCourseController)
//Edita um curso
coursesRouter.patch('/:id', verifyShape(editCourseSchema), checkTokenMiddleware, checkPropertyMiddleware, editCourseController)
//Deleta um curso
coursesRouter.delete('/:id', checkTokenMiddleware, checkPropertyMiddleware, deleteCourseController)

export default coursesRouter;