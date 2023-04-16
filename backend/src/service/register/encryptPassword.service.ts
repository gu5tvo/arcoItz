import bcrypt from 'bcryptjs'


export default async function encryptPassword(password: string): Promise<string> {
    
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    return passwordHash
}

