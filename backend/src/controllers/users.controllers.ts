import { Request, Response } from 'express';
import registerUserService from '../services/users/registerUser.service';
import displayProfileService from '../services/users/displayProfile.service';
import deleteProfileService from '../services/users/deleteProfile.service';
import updateProfileService from '../services/users/updateProfile.service';
import { returnSchema } from '../schemas/users.schema';

export async function registerUserController(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;
    const response = await registerUserService({ name, email, password });
    const final = await returnSchema.validate(response)
    return res.status(201).json(final);
}

export async function displayProfileController(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const response = await displayProfileService(id);
    const final = await returnSchema.validate(response)
    return res.status(200).json(final);
}

export async function displaySelfController(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const response = await displayProfileService(id);
    const final = await returnSchema.validate(response)
    return res.status(200).json(final);
}

export async function deleteProfileController(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    await deleteProfileService(id);
    return res.status(204).send();
}

export async function updateProfileController(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const response = await updateProfileService(id, req.body);
    const final = await returnSchema.validate(response)
    return res.status(200).send(final);
}