import {Request, Response, NextFunction} from 'express';
import AppError from '../../errors';
import User from '../../model/user.model';

export default async function verifyMailMiddleware(req: Request, res: Response, next: NextFunction){
    const user = await User.findOne({email: req.body.email});

    console.log(user);
    
    if(!user) throw new AppError("Usuário não encontrado", 404);

    req.user = {
        id: user.id,
        email: user.email,
        name: user.name
    }

    return next();
}