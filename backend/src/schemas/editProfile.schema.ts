import * as yup from 'yup'

// Esquemas de validação de ENTRADA
export const editProfileSchema = yup.object().shape({
    token: yup.string().required(),
    id: yup.string().required(),
    avatar: yup.string(),
    name: yup.string().required(),
    email: yup.string().required().email(),
    bio: yup.string(),
    area: yup.string(),
    address: yup.string(),
    title: yup.string(),
    gender: yup.string(),
    pronouns: yup.string(),
})

// Esquemas de validação de SAÍDA
export const editProfileSerializer = yup.object().shape({
    id: yup.string().required(),
    avatar: yup.string(),
    name: yup.string().required(),
    email: yup.string().required().email(),
    bio: yup.string(),
    area: yup.string(),
    address: yup.string(),
    title: yup.string(),
    gender: yup.string(),
    pronouns: yup.string(),
})