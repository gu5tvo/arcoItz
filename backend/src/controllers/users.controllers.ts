import { Request, Response } from 'express';
import registerUserService from '../services/users/registerUser.service';
import displayProfileService from '../services/users/displayProfile.service';
import deleteProfileService from '../services/users/deleteProfile.service';

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