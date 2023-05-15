import {Request, Response, NextFunction} from "express";
import AppError from "../../errors";
import Skills from "../../model/skills.model";

export default async function checkPropertyMiddleware(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const skill = await Skills.findOne({id})

    if(!skill) throw new AppError('Habilidade não encontrada', 404);

    if(skill.ownerId !== req.user.id) throw new AppError('Você não pode deletar uma habilidade que não é sua', 401);

    return next();
}