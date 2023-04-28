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
    const { id } = jwt.verify(token, process.env.JWT_SECRET) as { id: string };
    if(!id) throw new AppError('Token inválido', 401);

    //Verifica se o usuário existe.
    const user = await User.findOne({id})
    if(!user) throw new AppError('Token inválido', 401);

    //Verifica se o usuário está ativo.
    if(!user.isActive) throw new AppError('Usuário inativo, contate um administrador.', 403);

    //Se tudo estiver correto, adiciona o id do usuário na requisição.
    req.user.id = id;
    return next();

}