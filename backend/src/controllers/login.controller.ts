import { Request, Response } from 'express'
import { generateTokenService } from '../services/generateToken.service'

export default async function loginController(req: Request, res: Response) {
    // Apenas chega neste ponto se email e senha estiverem corretos
    const { id } = req.body

    // utilizado para verificar as credenciais do usuário enquanto a sessão se mantiver ativa
    const token: string = generateTokenService(id)

    return res.status(200).json({ token })
}

/** Controller para a rota '/login', responsável por gerar o token de autenticação do usuário.
 *  O token é gerado a partir do id do usuário, e é utilizado para verificar as credenciais do usuário
 *  O ID está presente na requisição, pois foi adicionado pelo middleware checkInputLoginMiddleware.
 */