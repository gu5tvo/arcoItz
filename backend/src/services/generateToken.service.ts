import jwt from 'jsonwebtoken'
import 'dotenv/config'

// Criação de um token único utilizado para identificar o usuário enquanto a sessão permanecer ativa
export const generateTokenService = (userId: string) => {
    const token = jwt.sign({
        id: userId
    }, process.env.SECRET_KEY, { expiresIn: '7d' })

    return token;
}

/// Service para a rota '/login', responsável por gerar o token de autenticação do usuário.