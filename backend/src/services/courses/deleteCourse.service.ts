import Course from "../../model/courses.model";

export default async function deleteCourseService(id: string) {
    await Course.deleteOne({ id });
    return;
}