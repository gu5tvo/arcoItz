import { Request, Response } from 'express';
import sendSupportEmailService from '../services/landing/sendSuportEmail.service';

export async function sendSuportMessageController(req: Request, res: Response){
    const {email , name , message , phone} = req.body;
    
    const response = await sendSupportEmailService({email , name , phone, message})
    res.status(200).json(response);
}
