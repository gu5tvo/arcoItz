import {Request, Response, NextFunction} from 'express';
import AppError from '../../errors';
import Admin from '../../model/admin.model';
import {compare} from 'bcryptjs';

export default async function checkAdminLoginMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
        throw new AppError('Email ou senha incorretos', 401);
    }

    const passwordMatch = password === admin.password

    if (!passwordMatch) {
        throw new AppError('Email ou senha incorretos', 401);
    }

    req.user = {
        id: admin.id,
        name: admin.name,
        email: admin.email
    }

    return next();
}