import { Request, Response } from 'express'
import User from '../model/user.model'
import { listUsersSerializer } from '../schemas/listUsers.schema'
import * as yup from 'yup'

export default async function listUsersController(req : Request, res: Response ) {
    const rawUsers = await User.find({})

    // Retorna todos os usuários como objetos e sem as senhas
    const users = rawUsers.map( user => {
        return { ...user.toObject(), password: undefined }
    })

    // Verificação da validade dos dados dos usuários
    const validatedUsers = await yup.array().of(listUsersSerializer).validate(users);

    return res.status(200).json({ users: validatedUsers })
}