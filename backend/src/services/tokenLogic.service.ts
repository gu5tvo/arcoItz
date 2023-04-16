import 'dotenv/config'
import jwt from 'jsonwebtoken'

const secretKey = process.env.SECRET_KEY

// Criação de um token único utilizado para identificar o usuário enquanto a sessão permanecer ativa
export const generateTokenService = (userId: string)=> {
    const token = jwt.sign({
        id: userId
    }, secretKey, { expiresIn: '7d' })

    return token;
}

// export const validateToken = (...)=> { ... }