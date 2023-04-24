import { Request, Response } from "express";
import User from "../model/user.model"; 
import { specificProfileSerializer } from "../schemas/specificProfile.schema";

export default async function specificProfileController(req: Request, res: Response){
    
    const { id } = req.user
    
    const user = await User.findOne({ id })

    // Verificação dos dados de saída do usuário (se possui os campos certos, e apenas eles)
    const validatedUser = await specificProfileSerializer.validate({ ...user.toObject(), password: undefined })

    res.status(200).json({ user: validatedUser })
}