import encryptPassword from "../../service/register/encryptPassword.service";
import User from "../../model/user.model";
import { Request, Response } from 'express'
import { registerSerializer } from "../../schemas/register.schema";
import { saveUser } from "../../service/register/saveUser.service";
import AppError from '../../errors'

// Define a função registerController como uma função assíncrona possuindo Request e Response como argumentos
export default async function registerController(req: Request, res: Response):Promise<Response> {
    
    // Recupera o objeto user do corpo da requisição e atribui a uma variável chamada userBody
    const userBody = req.body.user;

    // Desestrutura as propriedades email e name do objeto userBody e atribui a variáveis separadas
    const { email, name } = userBody;

    // Chama o service encryptPassword para gerar um hash da senha do usuário e atribui o hash a uma variável chamada passwordHash
    // O objetivo principal do hash de senha é proteger a senha original do usuário
    const passwordHash: string = await encryptPassword(userBody.password);

    // Cria um novo objeto User inserindo name, email e passwordHash
    const user = new User({
        name: name,
        email: email,
        password: passwordHash
    });

    // Chama o service saveUser para salvar o objeto user no banco de dados.
    // Caso ocorra um erro durante o processo, uma exceção é lançada com uma mensagem de erro personalizada.
    try {
        await saveUser(user);
    } catch (error) {
        throw new AppError("Erro ao salvar o usuário no banco de dados", 500);
    }

    // Valida o objeto user usando o objeto registerSerializer e atribui o objeto de usuário validado a uma variável chamada validatedUser
    const validatedUser = await registerSerializer.validate({...user.toObject(), password: undefined});

    // Retorna uma resposta com o objeto de usuário sanitizado e um código de status 201(criado)
    return res.status(201).json({ sanitizedUser: validatedUser });
}