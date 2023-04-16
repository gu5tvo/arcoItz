import { Request, Response, NextFunction } from 'express'
import AppError from '../../errors'
import { loginSchema } from '../../schemas/login.schema'
import User from '../../model/user.model'
import bcrypt from 'bcryptjs'

// verificação de email e senha, comparação com os dados do banco de dados
export default async function checkInputLoginMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {

    // validate() joga um erro se o body for inválido, é preciso do try catch
    try {
        const { email, password } = await loginSchema.validate(req.body)
        
        const user = await User.findOne({ email: email })
        if (!user) throw new Error

        const checkPassword = await bcrypt.compare(password, user.password)

        if (!checkPassword) throw new Error

        // transmite o id para a próxima etapa, para ser armazenado no token
        req.body.id = user.id;
        return next();

    } catch(err) {
        throw new AppError('Credenciais de login inválidas', 400)
    }
}