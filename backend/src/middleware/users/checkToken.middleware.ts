import { Request, Response, NextFunction } from 'express';
import AppError from '../../errors';
import User from '../../model/user.model';
import jwt from 'jsonwebtoken';

export default async function checkTokenMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
    //Verifica se há token enviado na requisição.
    const { authorization } = req.headers;
    if(!authorization) throw new AppError('Token não encontrado', 401);

    //Verifica se o token é válido.
    const [, token] = authorization.split(' ');
    if(token.length < 14) throw new AppError('Token inválido', 401);

    let id = ""
    jwt.verify(token, process.env.SECRET_KEY as string, (err, payload)=> {
        if(err) throw new AppError('Token inválido', 401);
        id = payload?.id as string
    });

    if(!id) throw new AppError('Token inválido', 401);

    //Verifica se o usuário existe.
    try {
        const user = await User.findOne({id})
        
        //Se tudo estiver correto, adiciona o id do usuário na requisição.
        req.user = {
            id: user.id,
            name: user.name,
            email: user.email,
        }
    } catch (err) {
        throw new AppError('Token inválido', 401);
    }

    return next();
}