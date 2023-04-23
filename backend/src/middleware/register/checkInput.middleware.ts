import { Request, Response, NextFunction } from 'express'
import AppError from '../../errors'
import User from '../../model/user.model'

export default async function checkInputRegisterMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
    
    const { email } = req.body
    // Verifica se já existe um usuário com o mesmo endereço de email no banco de dados. 
    
    const user = await User.exists({ email: email })
    
    //Se existir, lança uma exceção com uma mensagem personalizada.
    if (user) throw new AppError("Essa conta de email já está cadastrada", 409) 
   
    // Chama registerController
    return next();
}
