import User from "../../model/user.model";
import Skills from "../../model/skills.model";
import Document from "../../model/documents.model";
import Experience from "../../model/experience.model";
import Course from "../../model/courses.model";

export default async function deleteProfileService(id: string): Promise<void>{
    //Deleta usuário e todos os dados relacionados a ele.
    await User.deleteOne({id});
    await Skills.deleteMany({ownerId: id});
    await Document.deleteMany({ownerId: id});
    await Experience.deleteMany({ownerId: id});
    await Course.deleteMany({ownerId: id});
    
    return;
}