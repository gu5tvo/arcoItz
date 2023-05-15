import { Request, Response } from 'express';
import registerSkillService from '../services/skills/registerSkill.service';
import deleteSkillService from "../services/skills/deleteSkill.service";

export async function registerSkillController(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const response = await registerSkillService(req.body.name, id);
    return res.status(201).json(response);
}

export async function deleteSkillController(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await deleteSkillService(id);
    return res.status(204).send();
}