import { Request, Response, NextFunction } from 'express';
import AppError from '../../errors';
import User from '../../model/user.model';
import { verify } from 'jsonwebtoken'

export default async function checkTokenMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { authorization } = req.headers;
    const [ , token ] = authorization.split(' ');
    
    if(!token) throw new AppError("Token não informado", 401);
    
    try {
        
        const {id} = verify(token, process.env.SECRET_KEY) as {id: string};
        
        const user = await User.findOne({ id });

        req.user = {
            id: id,
            email: user.email,
            name: user.name
        }
    
        return next();

    } catch(err) {
        throw new AppError("Token inválido", 404);
    }

}