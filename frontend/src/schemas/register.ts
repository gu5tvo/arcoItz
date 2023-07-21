import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    name: yup.string().required('Este campo é obrigatório').matches(/^[a-zA-ZÀ-ÿ]+([a-zA-ZÀ-ÿ'.,-][a-zA-ZÀ-ÿ\s.'-,]*)*[a-zA-ZÀ-ÿ]+$/, 'Insira seu nome completo'),
    email: yup.string().email('Digite um e-mail válido').required('Este campo é obrigatório'),
    password: yup.string().min(8, 'A senha deve ter no mínimo 8 caracteres').required('Este campo é obrigatório').matches(/^(?=.*[@!#$%&*])(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@!#$%&*]{8,}$/, 'A senha deve conter: 1 Número, 1 Letra maiúscula, 1 Caractere especial e 1 letra maiúscula'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas devem ser iguais').required('Este campo é obrigatório'),
});

export default registerSchema;