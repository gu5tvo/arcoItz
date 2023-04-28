import User from "../../model/user.model";
import jwt from "jsonwebtoken";
import 'dotenv/config'

export default async function loginService(id: string): Promise<string>{
    const user = await User.findOne({id})

    const token = jwt.sign({id: user.id}, process.env.SECRET_KEY, {expiresIn: '4d'})

    return token;
}