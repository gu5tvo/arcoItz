import { Request, Response, NextFunction } from 'express'
import AppError from '../../errors'
import { registerSchema } from '../../schemas/register.schema'
import User from '../../model/user.model'

// checkInputRegisterMiddleware
export default async function checkInputRegisterMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
    
    // validate() joga um erro se o body for inválido, é preciso do try catch
    try {
        req.body.user = await registerSchema.validate(req.body)
    } catch (error) {
        throw new AppError("Credenciais inválidas", 400)
    }

    const email: string = req.body.user.email

    const userExists = await User.findOne({ email: email })

    if (userExists) throw new AppError("Essa conta de email já está cadastrada", 409) 

    return next();
}


