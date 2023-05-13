import User from "../../model/user.model";
import { iRegister } from "../../interfaces/user.interface";
import { hash } from "bcryptjs";

export default async function registerUserService(data: iRegister){
    const user = await User.create({
        name: data.name,
        email: data.email,
        password: await hash(data.password, 10)
    })

    return { ...user.toObject(), password: undefined, __v: undefined, _id: undefined};
}