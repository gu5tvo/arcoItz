import User from "../../model/user.model";
import { returnSchema } from "../../schemas/users.schema";

export default async function displayProfileService(id: string){
    const user = await User.findOne({id});

    const response = returnSchema.validate(user);
    return response;
}