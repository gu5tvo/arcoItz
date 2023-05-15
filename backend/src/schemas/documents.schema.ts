import * as yup from 'yup';

export const createDocument = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    document: yup.string().required()
})

export const editDocument = yup.object().shape({
    name: yup.string(),
    description: yup.string()
})