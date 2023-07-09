import Course from "../../model/courses.model";

export default async function registerCourseService(id, data){
    console.log(data)
    const course = await Course.create({
        ...data,
        ownerId: id
    });

    return { ...course.toObject(), _id: undefined, __v: undefined, ownerId: undefined };
}