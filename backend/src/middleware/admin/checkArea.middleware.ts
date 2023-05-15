import {Request, Response, NextFunction} from 'express';
import AppError from '../../errors';
import Area from '../../model/area.model';

export default async function checkAreaMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
    const {id} = req.params;
    if(!id) throw new AppError('Id não informado', 400)
    const area = await Area.findOne({_id: id})
    if(!area) throw new AppError('Área não encontrada', 404);
    return next();
}