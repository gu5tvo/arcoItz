import { Request, Response } from 'express';
import loginService from '../services/login/login.service';
import sendResetService from '../services/login/sendReset.service';
import recoverPasswordService from '../services/login/recoverPassword.service';

export default async function loginController(req: Request, res: Response) {
    const { id } = req.user;
    const token = await loginService(id);
    res.status(200).json({token});
}

export async function sendResetController(req: Request, res: Response){
    const {email} = req.body;
    const {ip} = req;
    const response = await sendResetService(email, ip);
    res.status(200).json(response);
}

export async function recoverPasswordController(req: Request, res: Response){
    const {id} = req.user;
    const {password} = req.body;
    const response = await recoverPasswordService(id, password);
    res.status(200).json(response);
}