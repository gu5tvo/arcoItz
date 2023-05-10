import { Request, Response, NextFunction } from 'express';
import User from "../../model/user.model";
import AppError from "../../errors";

export default async function verifyMailMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
    if(req.body.email){
        const user = await User.findOne({email: req.body.email});
        if(user) throw new AppError("Este email já está em uso.", 409);
        return next();
    }
    return next();
}
