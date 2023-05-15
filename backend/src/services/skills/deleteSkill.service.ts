import Skills from "../../model/skills.model";

export default async function deleteSkillService(id: string) {
    await Skills.findOneAndDelete({id});
    return;
}