import User from "../../model/user.model";
import {hash} from "bcryptjs"

export default async function recoverPasswordService(id: string, password: string) {
    const user = await User.findById(id);

    user.password = await hash(password, 10);
    user.updatedAt = new Date();

    await user.save();

    return { message: "Senha alterada com sucesso!"};
}