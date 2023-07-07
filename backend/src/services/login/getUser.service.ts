import User from "../../model/user.model";
import 'dotenv/config'

export default async function getUserService(id: string) {
    const user = await User.findById(id)
    console.log(user)
    return { ...user, password: undefined };
}