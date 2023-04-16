import encryptPassword from "../../service/register/encryptPassword.service";
import User from "../../model/user.model";
import { Request, Response } from 'express'
import { registerSerializer } from "../../schemas/register.schema";
import { saveUser } from "../../service/register/saveUser.service";


export default async function registerController(req: Request, res: Response) {
    
    const userb = req.body.user
    const { email, name } = userb

    const passwordHash: string = await encryptPassword(userb.password)

    const user = new User({
        name: name,
        email: email,
        password: passwordHash
    })

    saveUser(user)
    
    const sanitizedUser = await registerSerializer.validate({ ...user, password: undefined })
    
    return res.status(201).json({ user })
}