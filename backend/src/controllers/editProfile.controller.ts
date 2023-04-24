import { Request, Response } from 'express'
import User from '../model/user.model'
import getUserService from '../services/getUser.service'
import { saveUser } from '../services/saveUser.service'
import { editProfileSerializer } from '../schemas/editProfile.schema'

export default async function editProfileController(req: Request, res: Response) {
    const { id } = req.user

    const user = await getUserService(id)

    const rawUser = (await User.findOne({ id })).toObject()

    const newUser = new User({ rawUser })
    
    saveUser(newUser)

    const validatedUser = await editProfileSerializer.validate({ ...newUser, password: undefined });

    return res.status(200).json({ user: validatedUser })
}