import * as yup from 'yup'

// Esquemas de validadação de ENTRADA

export const registerSchema = yup.object().shape({
    name: yup.string().required().matches(/^[a-zA-Z ]+$/, 'Nome deve conter apenas letras'),
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
})

// Esquemas de validação de SAÍDA

export const registerSerializer = yup.object().shape({
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