import { Request, Response, NextFunction } from "express";
import AppError from "../../errors";
import Course from "../../model/courses.model";

export default async function checkPropertyMiddleware(req: Request, res: Response, next: NextFunction){
    const { id } = req.params;

    if(!id) throw new AppError('Id não informado', 400)

    const course = await Course.findOne({ id });

    if(!course) throw new AppError('Registro acadêmico especificado não encontrado', 404)

    if(course.ownerId !== req.user.id) throw new AppError('Você não tem permissão para editar este registro acadêmico', 403)

    return next();
}