// Esta é uma função assíncrona que salva um usuário na base de dados.
// Recebe um objeto de usuário como parâmetro e utiliza o método "save" fornecido pelo MongoDB para salvar o usuário.
export const saveUser = async (user)=> await user.save()