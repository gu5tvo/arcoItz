import { Request, Response } from 'express';
import editCourseService from '../services/courses/editCourse.service';
import registerCourseService from '../services/courses/registerCourse.service';
import deleteCourseService from '../services/courses/deleteCourse.service';

export async function registerCourseController(req: Request, res: Response){
    const { id } = req.user;
    const course = await registerCourseService(id, req.body);
    return res.status(201).json(course);
}

export async function editCourseController(req: Request, res: Response){
    const { id } = req.params;
    const course = await editCourseService(id, req.body);
    return res.status(200).json(course);
}

export async function deleteCourseController(req: Request, res: Response){
    const { id } = req.params;
    await deleteCourseService(id);
    return res.status(204).send();
}