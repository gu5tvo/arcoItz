import { iCourse } from "../../interfaces/course.interface";
import Course from "../../model/courses.model";

export default async function editCourseService(id, data: iCourse){
    const course = await Course.findOne({ id });
    console.log(data)
    if(data.name) course.name = data.name;
    if(data.institution) course.institution = data.institution;
    if(data.from) course.from = data.from;
    if(data.to) course.to = data.to;
    if(data.description) course.description = data.description;
    if(data.status) course.status = data.status;
    if (data.type) course.type = data.type
    
    await course.save();

    return { ...course.toObject(), _id: undefined, __v: undefined };
}