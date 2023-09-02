import * as yup from 'yup';

export const createDocument = yup.object().shape({
    formData: yup.mixed(),
})

export const editDocument = yup.object().shape({
    name: yup.string(),
    description: yup.string()
})