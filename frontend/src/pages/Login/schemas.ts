import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
})

export const forgotSchema = yup.object().shape({
    email: yup.string().email().required("Insira um email válido")
})

export const resetSchema = yup.object().shape({
    password: yup.string().required().matches(/^(?=.*[@!#$%&*])(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@!#$%&*]{8,}$/)
})

export default loginSchema;