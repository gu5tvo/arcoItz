import Admin from "../../../model/admin.model";

export default async function deleteAdminService(id){
    await Admin.findOneAndDelete({id})

    return;
}