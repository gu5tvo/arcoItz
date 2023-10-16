//frontend : DocumentModal.tsx
import React from "react";
import {
  BottomInfos,
  FieldName,
  FormField,
  PageTitle,
  SubmitButton,
} from "../style";
import AuthenticationTemplate from ".";
import ErrorMessage from "./ErrorMessage";
import { iValidateEmail } from "../../../interfaces/users";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormTrigger,
} from "react-hook-form";

interface Props {
  sendRequest: (data: iValidateEmail) => void;
  handleSubmit: UseFormHandleSubmit<iValidateEmail, undefined>;
  trigger: UseFormTrigger<iValidateEmail>;
  register: UseFormRegister<iValidateEmail>;
  errors: FieldErrors<iValidateEmail>;
}

export default function EmailConfirmationModal({
  sendRequest,
  handleSubmit,
  register,
  trigger,
  errors,
}: Props) {
  const onSubmit = handleSubmit(async (formData: iValidateEmail) => {});

  return (
    <AuthenticationTemplate handleForm={onSubmit}>
      <PageTitle>Verificação de Email</PageTitle>

      <FormField>
        <FieldName>
          Enviamos um código de verificação para o endereço de email que você
          forneceu. Por favor, verifique a sua caixa de entrada.
        </FieldName>
        <input type="number" {...register} />
        <ErrorMessage message={errors?.name?.message} />
      </FormField>

      <FormField>
        <SubmitButton type="submit">Enviar</SubmitButton>

        <BottomInfos>
          Se você não encontrar o email em sua caixa de entrada, verifique sua
          pasta de spam ou lixo eletrônico. Se precisar de ajuda, entre em
          contato com o nosso suporte.
        </BottomInfos>
      </FormField>
    </AuthenticationTemplate>   
  );
}
