import { Router } from 'express';

const adminRouter = Router();
//Serializers
import verifyShape from '../schemas/verifyShape.middleware';
import { registerAdmin, editAdmin, loginAdmin, city, serviceArea } from '../schemas/admin.schema';
import {updateSchema} from '../schemas/users.schema'
//Middlewares
import checkAdminLoginMiddleware from '../middleware/admin/checkAdminLogin.middleware';
import checkAdminTokenMiddleware from '../middleware/admin/checkAdminToken.middleware';
import checkUserMiddleware from '../middleware/admin/checkUser.middleware';
import checkCityMiddleware from '../middleware/admin/checkCity.middleware';
import checkAreaMiddleware from '../middleware/admin/checkArea.middleware';
import checkDocumentMiddleware from '../middleware/admin/checkDocument.middleware';
import checkExperienceMiddleware from '../middleware/admin/checkExperiences.middleware';
import checkSkillMiddleware from '../middleware/admin/checkSkills.middleware';
import checkCourseMiddleware from '../middleware/admin/checkCourse.middleware';
//Controllers
import {
    adminLoginController, listCityController, registerCityController,
    deleteCityController, listAreaController, registerAreaController,
    deleteAreaController, banUserController, updateProfileController,
    deleteProfileController, deleteDocumentController, deleteExperienceController,
    deleteSkillController, deleteCourseController, listAdminController,
    registerAdminController, editAdminController, deleteAdminController, getAdmin, displayAllUsersController
} from '../controllers/admin.controllers'


//Autentica admin
adminRouter.post('/login', verifyShape(loginAdmin), checkAdminLoginMiddleware, adminLoginController);

//Adiciona, edita, lista e deleta cidades
adminRouter.get('/city', listCityController) //
adminRouter.post('/city', verifyShape(city), checkAdminTokenMiddleware, registerCityController) //
adminRouter.delete('/city/:id', checkAdminTokenMiddleware, checkCityMiddleware, deleteCityController) //

//Adiciona, edita, lista e deleta áreas de serviço
adminRouter.get('/sector', listAreaController) //
adminRouter.post('/sector', verifyShape(serviceArea), checkAdminTokenMiddleware, registerAreaController) //
adminRouter.delete('/sector/:id', checkAdminTokenMiddleware, checkAreaMiddleware, deleteAreaController) //

//Bane/desbane contas
adminRouter.put('/ban/:id', checkAdminTokenMiddleware, checkUserMiddleware, banUserController) //

//Edita um usuário
adminRouter.patch('/users/:id', verifyShape(updateSchema),checkUserMiddleware, checkAdminTokenMiddleware, updateProfileController) //
//Deleta um usuário
adminRouter.delete('/users/:id', checkUserMiddleware, checkAdminTokenMiddleware, deleteProfileController) 
// Retorna uma página de usuários
adminRouter.get('/users', checkAdminTokenMiddleware, displayAllUsersController)
//

//Deleta um documento de um usuário
adminRouter.delete('/documents/:id', checkAdminTokenMiddleware, checkDocumentMiddleware, deleteDocumentController) //

//Deleta uma experiência de um usuário
adminRouter.delete('/experiences/:id', checkAdminTokenMiddleware, checkExperienceMiddleware, deleteExperienceController) //

//Deleta uma Skill de um usuário
adminRouter.delete('/skills/:id', checkAdminTokenMiddleware, checkSkillMiddleware, deleteSkillController)

//Deleta um curso de um usuário
adminRouter.delete('/courses/:id', checkAdminTokenMiddleware, checkCourseMiddleware, deleteCourseController)

//Lista todos admins
adminRouter.get('', checkAdminTokenMiddleware, listAdminController)
//Retorna o admin logado
adminRouter.get('/authenticate', checkAdminTokenMiddleware, getAdmin)


// checkAdminTokenMiddleware

//Cadastra um admin
adminRouter.post('', verifyShape(registerAdmin), checkAdminTokenMiddleware, registerAdminController)
//Edita outro admin
adminRouter.patch('/:id', verifyShape(editAdmin), checkAdminTokenMiddleware, editAdminController)
//Deleta outro admin
adminRouter.delete('/:id', checkAdminTokenMiddleware, deleteAdminController)

export default adminRouter;