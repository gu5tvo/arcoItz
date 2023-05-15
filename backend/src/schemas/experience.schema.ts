import * as yup from 'yup';

export const registerExperience = yup.object().shape({
    title: yup.string().required(),
    company: yup.string().required(),
    location: yup.string().required(),
    from: yup.string().required(),
    to: yup.string(),
    description: yup.string(),
})

export const updateExperience = yup.object().shape({
    title: yup.string(),
    company: yup.string(),
    location: yup.string(),
    from: yup.string(),
    to: yup.string(),
    description: yup.string(),
})