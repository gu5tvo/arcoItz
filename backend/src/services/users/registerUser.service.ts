import User from "../../model/user.model";
import { iRegister, iUserReturn } from "../../interfaces/user.interface";
import { hash } from "bcryptjs";
import { returnSchema } from "../../schemas/users.schema";

export default async function registerUserService(data: iRegister){
    const user = await User.create({
        name: data.name,
        email: data.email,
        password: await hash(data.password, 10)
    })

    const response = returnSchema.validate(user);
    return response;
}