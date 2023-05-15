import Admin from "../../../model/admin.model";

export default async function listAdminService(){
    const admins = await Admin.find();

    return admins.map(admin => ({...admin.toObject(), password: undefined, _id: undefined, __v: undefined}));
}