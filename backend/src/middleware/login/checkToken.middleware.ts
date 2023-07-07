import { Request, Response, NextFunction } from 'express';
import AppError from '../../errors';
import User from '../../model/user.model';
import { verify } from 'jsonwebtoken'

export default async function checkTokenMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {

    const {token} = req.params;

    if(!token) throw new AppError("Token não informado", 400);

    try {

        const {id} = verify(token, process.env.SECRET_KEY) as {id: string};
        const user = await User.findById(id);
        req.user = {
            id: user._id.toString(),
            email: user.email,
            name: user.name
        }
    
        return next();

    } catch(err) {
        throw new AppError("Token inválido", 404);
    }

}