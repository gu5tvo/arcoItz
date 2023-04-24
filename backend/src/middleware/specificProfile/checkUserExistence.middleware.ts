import { Request, Response, NextFunction } from 'express'
import User from "../../model/user.model"
import AppError from "../../errors"

export default async function checkUserExistenceMiddleware(req: Request, res: Response, next: NextFunction){
    
    const { id } = req.params
    
    const user = await User.findOne({ id })

    if (!user) throw new AppError("Este usuário não existe", 404)

    req.user = { id }

    next()
}