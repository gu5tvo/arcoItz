import Admin from "../../../model/admin.model";
import jwt from "jsonwebtoken";
import 'dotenv/config'

export default async function adminLoginService(id){
    const admin = await Admin.findOne({id});

    const token = jwt.sign({id: admin.id}, process.env.SECRET_KEY, {expiresIn: '7d'});

    return token;
}