import { Request, Response } from 'express'
import User from '../model/user.model'
import { editProfileSerializer } from '../schemas/editProfile.schema'

export default async function editProfileController(req: Request, res: Response) {

    const { id } = req.user
    
    const options = {
        // define o retorno de findOneAndUpdate para o novo estado do usuário
        new: true 
    }

    const newUser = await User.findOneAndUpdate({ id }, { ...req.body, token: undefined }, options)

    const validatedUser = await editProfileSerializer.validate({ ...newUser.toObject(), password: undefined });

    return res.status(200).json({ user: validatedUser })
}