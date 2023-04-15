import { Request, Response, NextFunction } from 'express'
import AppError from '../../errors'

export default function checkInput(req: Request, res: Response, next: NextFunction): void {
    const { name, email, password } = req.body

    if (!name || !email || !password) throw new AppError('Existem campos faltando', 400)

    if (name.length < 3) throw new AppError('Nome deve conter pelo menos 3 caracteres', 400)

    if (password.length < 6) throw new AppError('Senha deve conter pelo menos 6 caracteres', 400)

    return next();
}