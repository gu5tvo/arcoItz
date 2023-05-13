import User from "../../model/user.model";

export default async function recoverPasswordService(id: string, password: string) {
    const user = await User.findById(id);

    user.password = password;

    await user.save();

    return { message: "Senha alterada com sucesso!"};
}