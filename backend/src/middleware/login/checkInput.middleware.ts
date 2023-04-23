import { Request, Response, NextFunction } from 'express'
import AppError from '../../errors'
import User from '../../model/user.model'
import bcrypt from 'bcryptjs'

// verificação de email e senha, comparação com os dados do banco de dados
export default async function checkInputLoginMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {

    const { email, password } = req.body

    // verifica se o email é válido

    const user = await User.findOne({ email })

    if (!user) throw new AppError('Email ou senha incorretos', 400)

    // verifica se a senha é válida
    const checkPassword = await bcrypt.compare(password, user.password)
    if (!checkPassword) throw new AppError('Email ou senha incorretos', 400)
    
    // adiciona o id do usuário na requisição
    req.user =  { id: user.id }

    return next();
}