import Experience from "../../model/experience.model";

export default async function editExperienceService(id, data){
    const experience = await Experience.findOne({id});

    if(data.title) experience.title = data.title;
    if(data.description) experience.description = data.description;
    if(data.location) experience.location = data.location;
    if(data.company) experience.company = data.company;
    if(data.from) experience.from = data.from;
    if(data.to) experience.to = data.to;

    await experience.save();

    return { ...experience.toObject(), __v: undefined, _id: undefined, ownerId: undefined}

}