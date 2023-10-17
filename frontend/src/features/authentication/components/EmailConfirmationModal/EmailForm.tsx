import React from "react";
import * as S from "./../../style"
import MailIcon from "./../../../../assets/mail.svg"
import { EmailConfirmationModalProps } from ".";
import { iValidateEmail } from "../../../../interfaces/users";

interface EmailFormProps extends EmailConfirmationModalProps {
    onSubmit: () => Promise<void>;
} 


const EmailForm = ({
    sendRequest,
    handleSubmit,
    register,
    trigger,
    errors,
    onSubmit
  }: EmailFormProps) => {

    return (
    <>
      <S.PageTitle>Verificação de Email</S.PageTitle>
      <S.FormField>
        <img src={MailIcon} alt="Mail Icon" width="100px" height="100px" />
        <S.TopInfos>
          Enviamos um código de verificação para o endereço de email fornecido.
          Por favor, verifique a sua caixa de entrada.
        </S.TopInfos>
        <input type="number" {...register} />
        {/* <ErrorMessage message={errors?.name?.message} /> */}
      </S.FormField>
      <S.FormField>
        <S.SubmitButton type="submit">Validar Email</S.SubmitButton>

        <S.BottomInfosSmaller>
          Se você não encontrar o email em sua caixa de entrada, verifique sua
          pasta de spam ou lixo eletrônico. Se precisar de ajuda, entre em
          contato com o nosso suporte.
        </S.BottomInfosSmaller>
      </S.FormField>
    </>
  );
};


export default EmailForm;