import {Request, Response, NextFunction} from 'express';
import AppError from '../../errors';
import Experience from '../../model/experience.model';

export default async function checkExperienceMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
    const {id} = req.params;
    if(!id) throw new AppError('Id não informado', 400)
    const experience = await Experience.findOne({id})
    if(!experience) throw new AppError('Experiência não encontrada', 404);
    return next();
}