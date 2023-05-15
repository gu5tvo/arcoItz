import { Request, Response, NextFunction } from "express";
import Experience from "../../model/experience.model";
import AppError from "../../errors";

export default async function checkPropertyMiddleware(req: Request, res: Response, next: NextFunction){
    const {id} = req.params;

    const experience = await Experience.findOne({id});

    if(!experience) throw new AppError('Experiência não encontrada', 404);

    if(experience.ownerId !== req.user.id) throw new AppError('Você não pode alterar uma experiência que não é sua', 401);

    return next();
}