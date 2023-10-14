import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
})

export const emailSchema = yup.object().shape({
    email: yup.string().email().required(),
    type: yup.string().oneOf(['forgot', 'confirm']).required()
})

export const resetSchema = yup.object().shape({
    password: yup.string().required().matches(/^(?=.*[@!#$%&*])(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@!#$%&*]{8,}$/)
})

export const tokenValidationSchema = yup.object().shape({
    token: yup.string().required()
})

export default loginSchema;