import Course from "../../model/courses.model";

export default async function editCourseService(id, data){
    const course = await Course.findOne({ id });

    if(data.name) course.name = data.name;
    if(data.institution) course.institution = data.institution;
    if(data.from) course.from = data.from;
    if(data.to) course.to = data.to;
    if(data.description) course.description = data.description;

    await course.save();

    return { ...course.toObject(), _id: undefined, __v: undefined };
}