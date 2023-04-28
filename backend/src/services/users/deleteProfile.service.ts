import User from "../../model/user.model";

export default async function deleteProfileService(id: string){
    await User.deleteOne({id});
    return;
}