import { Request, Response, NextFunction } from 'express'
import AppError from '../../errors'
import jwt from 'jsonwebtoken'

export default async function checkCredentialsMiddleware(req: Request, res: Response, next: NextFunction){
    
    // Extrai o id do path da requisição
    const path = req.originalUrl.split('/')[2]
    
    const { token } = req.body
    const { id } = await jwt.verify(token, process.env.SECRET_KEY)   
    
    if (path != id) throw new AppError("Credenciais para deleção inválidas", 403)

    // Armazena o id para ser usado no controller
    req.user = { id }

    next()
}

