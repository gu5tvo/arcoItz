import {Request, Response, NextFunction} from "express";
import {verify} from "jsonwebtoken";
import AppError from "../../errors";
import User from "../../model/user.model";
import 'dotenv/config';

export default async function verifyResetMiddleware(req: Request, res: Response, next: NextFunction){
    const {token} = req.params;

    if(!token) throw new AppError("Token não informado", 400);

    const {id} = verify(token, process.env.SECRET_KEY) as {id: string};

    const user = await User.findById(id);

    if(!user) throw new AppError("Usuário não encontrado", 404);

    req.user = {
        id: user._id.toString(),
        email: user.email,
        name: user.name
    }

    return next();
}