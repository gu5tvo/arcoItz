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
    req.body.id = id

    next()
}

/*
1- Coletar o path da requisição através de req.originalUrl (para ter acesso ao id do usuário que se deseja deletar)
2- Coletar o token dentro de req.body
3- Do token, coletar o id armazenado
4- Verificar se o id é igual ao path
5- User.deleteOne({ id: id })
6- return res.status(204).send() */