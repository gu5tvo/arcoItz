import User from "../../model/user.model";
import { iUserUpdate } from "../../interfaces/user.interface";

export default async function updateProfileService(id: string, data: iUserUpdate){
    const user = await User.findOne({ id });

    if(data.name) user.name = data.name;
    if(data.email) user.email = data.email;
    if(data.password) user.password = data.password;
    if(data.bio) user.bio = data.bio;
    if(data.area) user.area = data.area;
    if(data.address) user.address = data.address;
    if(data.title) user.title = data.title;
    if(data.isActive) user.isActive = data.isActive;

    user.updatedAt = new Date();

    const response = await user.save();

    return response;
}