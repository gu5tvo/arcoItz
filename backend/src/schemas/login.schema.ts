import * as yup from 'yup'

// Esquemas de validadação de ENTRADA
export const loginSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
})