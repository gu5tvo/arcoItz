import Experience from "../../model/experience.model";

export default async function deleteExperienceService(id){
    await Experience.deleteOne({id});
    return;
}