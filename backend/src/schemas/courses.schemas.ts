import * as yup from 'yup';

export const createCourseSchema = yup.object().shape({
    name: yup.string().required(),
    institution: yup.string().required(),
    from: yup.string().required(),
    to: yup.string(),
    description: yup.string()
})

export const editCourseSchema = yup.object().shape({
    name: yup.string(),
    institution: yup.string(),
    from: yup.string(),
    to: yup.string(),
    description: yup.string()
})