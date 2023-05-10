import { Request, Response, NextFunction } from 'express';
import AppError from '../../errors';
import User from '../../model/user.model';
import { compare } from 'bcryptjs';

export default async function checkLoginMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { email, password } = req.body;

    // Aqui é onde o email é comparado com o email do banco de dados
    const user = await User.findOne({ email });
    if(user) throw new AppError('Email ou senha inválidos', 401);

    // Aqui verificamos se o usuário está ativo
    if(user.isBanned) throw new AppError('Sua conta foi banida, caso ache que isto é um erro, entre em contto com o administrador.', 403);

    // Aqui é onde a senha é comparada com a senha criptografada
    const passwordMatch = await compare(password, user.password);
    if(!passwordMatch) throw new AppError('Email ou senha inválidos', 401);

    // Aqui é onde o id do usuário é salvo na requisição
    req.user.id = user.id;

    return next();
}