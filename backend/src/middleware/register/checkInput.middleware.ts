import { Request, Response, NextFunction } from 'express'
import AppError from '../../errors'
import { registerSchema } from '../../schemas/register.schema'
import User from '../../model/user.model'

// Define a função checkInputRegisterMiddleware como uma função assíncrona possuindo Request , Response e NextFunction como argumentos
export default async function checkInputRegisterMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
    
    // Tenta validar o objeto req.body com base no schema definido em registerSchema e atribuir o objeto validado à propriedade user de req.body. 
    // Caso ocorra um erro na validação, uma exceção é lançada com uma mensagem de erro personalizada.
    try {
        req.body.user = await registerSchema.validate(req.body)
    } catch (error) {
        throw new AppError("Credenciais inválidas", 400)
    }

    // Obtém o valor da propriedade 'email' do objeto de usuário validado na requisição e atribui a uma variável 'email' com tipo 'string'.
    const email: string = req.body.user.email

    // Verifica se já existe um usuário com o mesmo endereço de email no banco de dados. 
    //findOne() é um método fornecido pelo Mongoose que, neste caso, está procurando um documento de usuário com um campo de email que corresponda à variável de email.
    const userExists = await User.findOne({ email: email })

    //Se existir, lança uma exceção com uma mensagem personalizada.
    if (userExists) throw new AppError("Essa conta de email já está cadastrada", 409) 

    // Chama a próxima função (registerController)
    return next();
}

