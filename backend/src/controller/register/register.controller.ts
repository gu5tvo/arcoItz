import bcrypt from 'bcryptjs'
import User from "../../model/user.model";
import { Request, Response } from 'express'
import { registerSerializer } from "../../schemas/register.schema";
import { saveUser } from "../../service/register/saveUser.service";

export default async function registerController(req: Request, res: Response):Promise<Response> {
    
    const userBody = req.body.user;

    const { email, name } = userBody;

    const salt = await bcrypt.genSalt(12)
    
    const password = await bcrypt.hash(userBody.password, salt)

    const user = new User({ name, email, password });

    // salva o objeto user no banco de dados
    await saveUser(user);

    // verificação da validade dos dados do usuário 
    const validatedUser = await registerSerializer.validate({...user.toObject(), password: undefined});

    return res.status(201).json({ user: validatedUser });
}