import { Request, Response } from 'express'
import { generateTokenService } from '../services/tokenLogic.service'

export default async function loginController (req: Request, res: Response) {
    // Apenas chega neste ponto se email e senha estiverem corretos
    const { id } = req.body

    // utilizado para verificar as credenciais do usuário enquanto a sessão se mantiver ativa
    const token: string = generateTokenService(id)

    return res.status(200).json({ token})
}