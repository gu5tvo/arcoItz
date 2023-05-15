import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import AppError from '../../errors';
import Admin from '../../model/admin.model';
import 'dotenv/config'

export default async function checkAdminTokenMiddleware(req: Request, res: Response, next: NextFunction){
    const { authorization } = req.headers;

    if(!authorization) throw new AppError('Token não informado', 401);

    const [ , token ] = authorization.split(' ');

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        
        const admin = await Admin.findOne({ id: decoded.id });

        if(!admin) throw new AppError('Admin não encontrado', 404);

        req.user = {
            id: admin.id,
            name: admin.name,
            email: admin.email
        }

        return next();
    }catch(err){
        console.log(err);
        throw new AppError('Token inválido', 401);
    }

}