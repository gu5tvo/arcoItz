import { Request, Response, NextFunction } from 'express'
import AppError from '../../errors'
import jwt from 'jsonwebtoken'

export default async function checkCredentialsMiddleware(req: Request, res: Response, next: NextFunction){
    const { id } = req.params

    const { token } = req.body

    const { id: tokenId } = await jwt.verify(token, process.env.SECRET_KEY)   

    if (tokenId != id) throw new AppError("Credenciais para deleção inválidas", 403)

    // Armazena o id para ser usado no controller
    req.user = { id }

    next()
}

