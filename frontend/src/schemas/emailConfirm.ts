import * as yup from "yup";

export const emailConfirmSchema = yup.object().shape({
  confirmCode: yup
    .number()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .required("Este campo é obrigatório"),
});

export default emailConfirmSchema;
