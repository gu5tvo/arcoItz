import User from "../../model/user.model";
import { iUserUpdate } from "../../interfaces/user.interface";
import { hash } from "bcryptjs";

export default async function updateProfileService(id: string, data: iUserUpdate) {
    const user = await User.findOne({ id });

    if(data.name) user.name = data.name;
    if(data.avatar) user.avatar = data.avatar; 
    if(data.email) user.email = data.email;
    if(data.email) user.isActive = false;
    if(data.password) user.password = await hash(data.password, 10);
    if(data.city) user.city = data.city;
    if(data.bio) user.bio = data.bio;
    if(data.area === "none") user.area = ""
    else if (data.area) user.area = data.area;
    if(data.gender) user.gender = data.gender;
    if(data.pronouns) user.pronouns = data.pronouns;
    if(data.phone) user.phone = data.phone;
    if(data.address) user.address = data.address;
    if(data.title) user.title = data.title;
    if(data.isActive === true || data.isActive === false) user.isActive = data.isActive;
    if(data.instagram) user.instagram = data.instagram;
    if(data.linkedin) user.linkedin = data.linkedin;
    if(data.portfolio) user.portfolio = data.portfolio;

    user.updatedAt = new Date();

    const response = await user.save();

    return { ...response.toObject(), password: undefined, __v: undefined, _id: undefined};
}