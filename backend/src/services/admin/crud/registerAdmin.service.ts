import Admin from "../../../model/admin.model";
import { hash } from 'bcryptjs'

export default async function registerAdminService(data){
    const admin = await Admin.create({...data, password: await hash(data.password, 10) });

    return {...admin.toObject(), password: undefined, _id: undefined, __v: undefined};
}