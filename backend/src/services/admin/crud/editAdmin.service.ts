import Admin from "../../../model/admin.model";
import { hash } from "bcryptjs"
import { iEditAdmin } from "../../../interfaces/admin.interface";

export default async function editAdminService(id, { name, email, password, avatar, city, phone }: iEditAdmin){
    const admin = await Admin.findOne({id});

    if(name) admin.name = name;
    if(email) admin.email = email;
    if(password) admin.password = await hash(password, 10);
    if(avatar) admin.avatar = avatar
    if(city) admin.city = city;
    if(phone) admin.phone = phone
    
    await admin.save();

    return {...admin.toObject(), password: undefined, _id: undefined, __v: undefined};
}