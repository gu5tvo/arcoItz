import { Request, Response, NextFunction } from 'express'
import AppError from '../../errors'
import jwt from 'jsonwebtoken'

export default async function checkCredentialsMiddleware(req: Request, res: Response, next: NextFunction){
    
    // Extrai o id do path da requisição
    const { id } = req.params

    const { token } = req.body
    const verifiedToken = await jwt.verify(token, process.env.SECRET_KEY)
    const tokenId = verifiedToken.id

    if (tokenId != id) throw new AppError("Credenciais para edição de perfil inválidas", 403)

    // Armazena o id para ser usado no controller
    req.user =  { id }

    next()
}

