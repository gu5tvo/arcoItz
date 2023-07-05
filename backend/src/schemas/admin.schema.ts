import * as yup from 'yup';

export const registerAdmin = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required()
});

export const loginAdmin = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
})

export const editAdmin = yup.object().shape({
    name: yup.string(),
    email: yup.string().email(),
    password: yup.string(),
    avatar: yup.string(),
    phone: yup.string(),
    city: yup.string()
})

export const serviceArea = yup.object().shape({
    name: yup.string().required()
})

export const city = yup.object().shape({
    name: yup.string().required()
})