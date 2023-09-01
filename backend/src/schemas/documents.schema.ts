import * as yup from 'yup';

export const createDocument = yup.object().shape({
    file: yup.mixed().required(),
})

export const editDocument = yup.object().shape({
    name: yup.string(),
    description: yup.string()
})