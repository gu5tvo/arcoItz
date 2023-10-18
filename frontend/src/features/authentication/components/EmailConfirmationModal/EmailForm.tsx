import React, { Dispatch } from "react";
import * as S from "./../../style";
import { EmailConfirmationModalProps, modals } from ".";
import ReactCodeInput from "react-code-input";
import { useForm, Controller } from "react-hook-form";
import AuthenticationTemplate from "..";
import { iValidateEmail } from "../../../../interfaces/users";
import { ArrowLeftSvg } from "./Svgs";

const EmailForm = ({
  setCurrentModal,
}: {
  setCurrentModal: Dispatch<string>;
}) => {
  const { control, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onSubmit = (formData) => {
    console.log(formData.confirmCode);
  };

  return (
    <AuthenticationTemplate handleForm={handleSubmit(onSubmit)}>
      <S.PageTitle>Verificação de Email</S.PageTitle>
      
      <S.GapDiv>

        <S.FormField position="center">
          <S.TopInfos>
            Digite o código para validar seu email:
          </S.TopInfos>
        </S.FormField>
        <S.FormField position="center">
          <Controller
            name="confirmCode"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <ReactCodeInput
                type="number"
                fields={6}
                name="confirmCode"
                inputMode="numeric"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          {/* {errors.confirmCode && (
            <span className="error-message">Campo obrigatório</span>
          )} */}
        </S.FormField>
        <S.FormField>
          <S.SubmitButton type="submit">Validar Email</S.SubmitButton>
        </S.FormField>
      </S.GapDiv>

      <S.FormField>
        <ArrowLeftSvg setCurrentModal={setCurrentModal} />
      </S.FormField>
    </AuthenticationTemplate>
  );
};

export default EmailForm;
