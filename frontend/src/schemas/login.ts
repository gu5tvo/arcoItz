import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().email('Insira um e-mail válido').required('Este campo é obrigatório'),
    password: yup.string().required('Este campo é obrigatório'),
    remember: yup.boolean()
});

export const forgotSchema = yup.object().shape({
    email: yup.string().email("Insira um e-mail válido").required("Este campo é obrigatório")
})

export const resetSchema = yup.object().shape({
    password: yup.string().min(8, 'A senha deve ter no mínimo 8 caracteres').required('Este campo é obrigatório').matches(/^(?=.*[@!#$%&*])(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@!#$%&*]{8,}$/, 'A senha deve conter: 1 Número, 1 Letra maiúscula, 1 Caractere especial e 1 letra maiúscula'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), undefined], 'As senhas devem ser iguais').required('Este campo é obrigatório'),
})

export default loginSchema;