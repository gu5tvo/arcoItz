import { Request, Response, NextFunction } from 'express';
import AppError from '../../errors';
import City from '../../model/city.model';

export default async function checkCityMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
    const {id} = req.params;
    if(!id) throw new AppError('Id não informado', 400)
    const city = await City.findOne({_id: id})
    if(!city) throw new AppError('Cidade não encontrada', 404);
    return next();
}