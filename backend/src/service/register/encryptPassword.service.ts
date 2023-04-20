import bcrypt from 'bcryptjs'

// Define a função "encryptPassword" como uma função async que retorna uma Promise<string>
export default async function encryptPassword(password: string): Promise<string> {

    // Gera um salt aleatório usando a biblioteca "bcrypt" e atribui a uma variável chamada "salt"
    //Salt é um valor aleatório que é adicionado a uma senha antes de aplicar a função de hash.
    const salt = await bcrypt.genSalt(12)
    
    // Gera um hash da senha fornecida usando o salt gerado anteriormente e atribui a uma variável chamada "passwordHash"
    const passwordHash = await bcrypt.hash(password, salt)
    
    // Retorna o hash da senha
    return passwordHash
}