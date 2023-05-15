import Admin from "../../../model/admin.model";

export default async function registerAdminService(data){
    const admin = await Admin.create(data);

    return {...admin.toObject(), password: undefined, _id: undefined, __v: undefined};
}