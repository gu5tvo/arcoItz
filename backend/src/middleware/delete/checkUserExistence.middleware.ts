import User from '../../model/user.model'
import { Request, Response, NextFunction } from 'express'
import AppError from '../../errors'

export default async function checkUserExistenceMiddleware (req: Request, res: Response, next: NextFunction) {
    const { id } = req.user

    const user = await User.exists({ id })

    if (!user) throw new AppError("Este usuário não existe.", 404)
    
    next()
}