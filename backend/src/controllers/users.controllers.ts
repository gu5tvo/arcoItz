import { Request, Response } from 'express';
import registerUserService from '../services/users/registerUser.service';
import displayProfileService from '../services/users/displayProfile.service';
import deleteProfileService from '../services/users/deleteProfile.service';
import updateProfileService from '../services/users/updateProfile.service';
import displayAllUsersService from '../services/users/displayAll.service';
import insertDocumentService from '../services/users/insertDocument.service';

export async function registerUserController(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;
    const response = await registerUserService({ name, email, password });
    return res.status(201).json(response);
}

export async function displayProfileController(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const response = await displayProfileService(id);
    return res.status(200).json(response);
}

export async function displaySelfController(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const response = await displayProfileService(id);
    return res.status(200).json(response);
}

export async function deleteProfileController(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    await deleteProfileService(id);
    return res.status(204).send();
}

export async function updateProfileController(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const response = await updateProfileService(id, req.body);
    return res.status(200).send(response);
}

export async function displayAllUsersController(req: Request, res: Response): Promise<Response> {
    const { page, amount, city } = req.query as { page: string, amount: string, city: string}
    const response = await displayAllUsersService(page, amount, city);
    return res.status(200).json(response);
}

export async function insertDocumentController(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const response = await insertDocumentService(req.body, id);
    return res.status(201).json(response);
}