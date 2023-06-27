import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().email('Insira um e-mail válido').required('Este campo é obrigatório'),
    password: yup.string().required('Este campo é obrigatório'),
});

export const forgotSchema = yup.object().shape({
    email: yup.string().email("Insira um e-mail válido").required("Este campo é obrigatório")
})

export default loginSchema;