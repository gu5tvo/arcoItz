import * as yup from 'yup'

// Esquemas de validadação de ENTRADA
export const deleteSchema = yup.object().shape({
    token: yup.string().required()
})