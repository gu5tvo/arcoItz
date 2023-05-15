import { Request, Response, NextFunction } from 'express';
import AppError from '../../errors';
import Course from '../../model/courses.model';

export default async function checkCourseMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
    const {id} = req.params;
    if(!id) throw new AppError('Id não informado', 400)
    const course = await Course.findOne({id})
    if(!course) throw new AppError('Curso não encontrado', 404);
    return next();
}