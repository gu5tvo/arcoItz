import User from "../../model/user.model";
import Document from "../../model/documents.model";
import Skills from "../../model/skills.model";
import Experience from "../../model/experience.model";
import Course from "../../model/courses.model";
import { iDisplayProfile, iCourse, iDocument, iExperience, iSkill } from "../../interfaces/user.interface";

export default async function displayProfileService(id: string){
    const user = await User.findOne({id});

    //Converte o document 'User' para um objeto
    user.toObject();

    //Busca os documentos, skills e experiencias do usuario
    const documents = await Document.find({ownerId: user.id});
    const skills = await Skills.find({ownerId: user.id});
    const experience = await Experience.find({ownerId: user.id});
    const courses = await Course.find({ownerId: user.id});

    const response = {
        ...user.toObject(),
        //Converte os documentos, skills e experiencias para um objeto e os adiciona no response
        documents: documents.map(document => {
            return { ...document.toObject(), __v: undefined, _id: undefined, ownerId: undefined }
        }),
        //Converte os documentos, skills e experiencias para um objeto e os adiciona no response
        skills: skills.map(skill => {
            return { ...skill.toObject(), __v: undefined, _id: undefined, ownerId: undefined }
        }),
        //Converte os documentos, skills e experiencias para um objeto e os adiciona no response
        experiences: experience.map(exp => {
            return { ...exp.toObject(), __v: undefined, _id: undefined, ownerId: undefined }
        }),
        //Converte os documentos, skills e experiencias para um objeto e os adiciona no response
        courses: courses.map(course => {
            return { ...course.toObject(), __v: undefined, _id: undefined, ownerId: undefined }
        })
    }

    console.log(response)

    return {...response, password: undefined, __v: undefined, _id: undefined }
}