import { Request, Response, NextFunction } from 'express'
import AppError from '../../errors'
import { registerSchema } from '../../schemas/register.schema'
import User from '../../model/user.model'

export default async function checkInputRegisterMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
  
    try {
        req.body.user = await registerSchema.validate(req.body)
    } catch (error) {
        throw new AppError("Credenciais inválidas", 400)
    }

    const email: string = req.body.user.email

    // Verifica se já existe um usuário com o mesmo endereço de email no banco de dados. 
    const userExists = await User.findOne({ email: email })

    //Se existir, lança uma exceção com uma mensagem personalizada.
    if (userExists) throw new AppError("Essa conta de email já está cadastrada", 409) 

    // Chama registerController
    return next();
}

