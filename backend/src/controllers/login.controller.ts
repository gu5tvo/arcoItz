import { Request, Response } from 'express';
import loginService from '../services/login/login.service';
import sendResetService from '../services/login/sendReset.service';
import recoverPasswordService from '../services/login/recoverPassword.service';
import getUserService from '../services/login/getUser.service';
import generateCode from '../services/login/generateCode.service';

export default async function loginController(req: Request, res: Response) {
    const { id } = req.user;
    const token = await loginService(id);
    res.status(200).json({token});
}

export async function sendResetController(req: Request, res: Response){
    const {email} = req.body;
    const {ip} = req;
    console.log({ip, email});
    const response = await sendResetService(email, ip);
    res.status(200).json(response);
}

export async function recoverPasswordController(req: Request, res: Response){
    const {id} = req.user;
    const {password} = req.body;

    
    const response = await recoverPasswordService(id, password);
    res.status(200).json(response);
}

export async function validateTokenController(req: Request, res: Response) {
    const { id } = req.user
    const user = await getUserService(id)
    res.status(200).json({ user })
}

export async function confirmEmailController(req: Request, res: Response) {
    const { email } = req.body
    const { ip } = req
    
    const type = req.body.type
    const code = generateCode(6)

    const response = { 
        message: '', 
        code  
    }

    switch (type) {
        case 'forgot':
            response.message = await sendResetService(email, ip)
            break
        case 'confirm':
            response.message = await sendResetService(email, ip)
            break
        default:
            response.message = 'Tipo de requisição inválido'
            break
    }


    res.status(200).json(response)
}