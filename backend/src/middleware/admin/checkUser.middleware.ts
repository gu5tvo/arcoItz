import { Request, Response, NextFunction } from 'express';
import AppError from '../../errors';
import User from '../../model/user.model';

export default async function checkUserMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.params;
    if(!id) throw new AppError('Id não informado', 400)
    const user = await User.findOne({id})
    if(!user) throw new AppError('Usuário não encontrado', 404);
    return next();
}
