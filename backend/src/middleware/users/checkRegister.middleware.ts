import { Request, Response, NextFunction } from 'express';
import AppError from '../../errors';
import User from '../../model/user.model';

export default async function checkRegisterMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
    const {email} = req.body;

    //Verifica se o email já está cadastrado.
    const conflictMail = await User.findOne({email});
    if(conflictMail) throw new AppError('Este e-mail já está cadastrado.', 409);

    return next();
}