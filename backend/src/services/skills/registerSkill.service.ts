import Skills from "../../model/skills.model";

export default async function registerSkillService(name: string, ownerId: string) {
    const skill = await Skills.create({
        name,
        ownerId
    });

    return {
        ...skill.toObject(),
        __v: undefined,
        _id: undefined,
        ownerId: undefined
    }
}