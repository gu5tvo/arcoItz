import { Request, Response } from 'express'
import User from '../model/user.model'

export default async function listUsersController(req : Request, res: Response ) {
    console.log("dasd")
    const rawUsers = await User.find({})

    // Retorna todos os usuários como objetos e sem as senhas
    const users = rawUsers.map( user => {
        return { ...user.toObject(), password: undefined }
    })

    return res.status(200).json({ users })
}