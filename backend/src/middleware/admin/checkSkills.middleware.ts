import { Request, Response, NextFunction } from 'express';
import AppError from '../../errors';
import Skill from '../../model/skills.model';

export default async function checkSkillMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
    const {id} = req.params;
    if(!id) throw new AppError('Id não informado', 400)
    const skill = await Skill.findOne({id})
    if(!skill) throw new AppError('Habilidade não encontrada', 404);
    return next();
}