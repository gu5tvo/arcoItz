import { Request, Response } from 'express';
//Login
import adminLoginService from '../services/admin/login/adminLogin.service';
//Cidades
import listCityService from '../services/admin/city/listCity.service';
import registerCityService from '../services/admin/city/registerCity.service';
import deleteCityService from '../services/admin/city/deleteCity.service';
//Areas de atuação
import listAreaService from '../services/admin/service-area/listArea.service';
import registerAreaService from '../services/admin/service-area/registerArea.service';
import deleteAreaService from '../services/admin/service-area/deleteArea.service';
//Usuários
import banUserService from '../services/admin/users/banUser.service';
//Admins Crud
import listAdminService from '../services/admin/crud/listAdmin.service';
import registerAdminService from '../services/admin/crud/registerAdmin.service';
import editAdminService from '../services/admin/crud/editAdmin.service';
import deleteAdminService from '../services/admin/crud/deleteAdmin.service';
//Users
import updateProfileService from '../services/users/updateProfile.service';
import deleteProfileService from '../services/users/deleteProfile.service';
//Documents
import deleteDocumentService from '../services/documents/deleteDocument.service';
//Experiences
import deleteExperienceService from '../services/experiences/deleteExperience.service';
//Courses
import deleteCourseService from '../services/courses/deleteCourse.service';
//Skills
import deleteSkillService from '../services/skills/deleteSkill.service';


export async function adminLoginController(req: Request, res: Response){
    const {id} = req.user;
    const token = await adminLoginService(id);
    return res.status(200).json({token});
}

export async function listCityController(req: Request, res: Response){
    const cities = await listCityService();
    return res.status(200).json(cities);
}

export async function registerCityController(req: Request, res: Response){
    const city = await registerCityService(req.body.name);
    return res.status(201).json(city);
}

export async function deleteCityController(req: Request, res: Response){
    const { id } = req.params;
    await deleteCityService(id);
    return res.status(204).send();
}

export async function listAreaController(req: Request, res: Response){
    const areas = await listAreaService();
    return res.status(200).json(areas);
}

export async function registerAreaController(req: Request, res: Response){
    const area = await registerAreaService(req.body.name);
    return res.status(201).json(area);
}

export async function deleteAreaController(req: Request, res: Response){
    const { id } = req.params;
    await deleteAreaService(id);
    return res.status(204).send();
}

export async function banUserController(req: Request, res: Response){
    const { id } = req.params;
    const message = await banUserService(id);
    return res.status(200).json({message});
}

export async function listAdminController(req: Request, res: Response){
    const admins = await listAdminService();
    return res.status(200).json(admins);
}

export async function registerAdminController(req: Request, res: Response){
    const admin = await registerAdminService(req.body);
    return res.status(201).json(admin);
}

export async function editAdminController(req: Request, res: Response){
    const { id } = req.params;
    const admin = await editAdminService(id, req.body);
    return res.status(200).json(admin);
}

export async function deleteAdminController(req: Request, res: Response){
    const { id } = req.params;
    await deleteAdminService(id);
    return res.status(204).send();
}

export async function updateProfileController(req: Request, res: Response){
    const { id } = req.params;
    const user = await updateProfileService(id, req.body);
    return res.status(200).json(user);
}

export async function deleteProfileController(req: Request, res: Response){
    const { id } = req.params;
    await deleteProfileService(id);
    return res.status(204).send();
}

export async function deleteDocumentController(req: Request, res: Response){
    const { id } = req.params;
    await deleteDocumentService(id);
    return res.status(204).send();
}

export async function deleteExperienceController(req: Request, res: Response){
    const { id } = req.params;
    await deleteExperienceService(id);
    return res.status(204).send();
}

export async function deleteCourseController(req: Request, res: Response){
    const { id } = req.params;
    await deleteCourseService(id);
    return res.status(204).send();
}

export async function deleteSkillController(req: Request, res: Response){
    const { id } = req.params;
    await deleteSkillService(id);
    return res.status(204).send();
}