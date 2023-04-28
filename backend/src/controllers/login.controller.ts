import { Request, Response } from 'express';
import loginService from '../services/login/login.service';

export default async function loginController(req: Request, res: Response) {
    const { id } = req.user;
    const token = await loginService(id);
    res.status(200).json({token});
}