import Experience from "../../model/experience.model";

export default async function registerExperienceService(id, data){
    const experience = await Experience.create({
        ...data,
        ownerId: id
    })

    return { ...experience.toObject(), __v: undefined, _id: undefined, ownerId: undefined}
}