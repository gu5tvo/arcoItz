import Admin from "../../../model/admin.model";
import { hash } from "bcryptjs"

export default async function editAdminService(id, data){
    const admin = await Admin.findOne({id});

    if(data.name) admin.name = data.name;
    if(data.email) admin.email = data.email;
    if(data.password) admin.password = await hash(data.password, 10);

    await admin.save();

    return {...admin.toObject(), password: undefined, _id: undefined, __v: undefined};
}