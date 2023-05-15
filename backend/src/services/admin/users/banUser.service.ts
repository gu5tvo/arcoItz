import User from "../../../model/user.model";

export default async function banUserService(id){
    const user = await User.findOne({id})

    user.isBanned = !user.isBanned;

    await user.save();

    const message = user.isBanned ? 'Usuário banido com sucesso' : 'Usuário desbanido com sucesso';

    return message;
}