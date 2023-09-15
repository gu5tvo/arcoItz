import * as yup from 'yup';

export const suportSchema = yup.object().shape({
    email: yup.string().email().required(),
    phone: yup.string().required(),
    name: yup.string().required(),
    message: yup.string().required(),
})
