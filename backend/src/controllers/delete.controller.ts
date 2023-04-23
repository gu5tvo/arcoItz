import { Request, Response } from 'express'
import User from '../model/user.model'

export default async function deleteController(req : Request, res: Response) : Promise<Response>{
    
    const { id } = req.body

    await User.deleteOne({ id: id })    

    return res.status(204).send()
}