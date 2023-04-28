import { Request, Response, NextFunction } from  'express';
import User from '../../model/user.model';
import AppError from '../../errors';

export default async function checkExistenceMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
    //Coleta o id enviado como parâmetro.
    const { id } = req.params;
    //Verifica se o id é válido.
    if(!id) throw new AppError('Id inválido', 400);

    //Verifica se o usuário existe.
    const user = await User.findOne({id});
    if(!user) throw new AppError('Usuário não encontrado', 404);

    return next();
}