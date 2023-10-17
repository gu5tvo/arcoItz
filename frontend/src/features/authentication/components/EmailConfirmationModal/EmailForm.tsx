import React, { Dispatch } from "react";
import * as S from "./../../style";
import { EmailConfirmationModalProps, modals } from ".";
import ReactCodeInput from "react-code-input";
import { useForm, Controller } from "react-hook-form";
import AuthenticationTemplate from "..";
import { iValidateEmail } from "../../../../interfaces/users";

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
      <S.FormField>
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
        {errors.confirmCode && (
          <span className="error-message">Campo obrigatório</span>
        )}
      </S.FormField>
      <S.FormField>
        <S.SubmitButton type="submit">Validar Email</S.SubmitButton>
      </S.FormField>

      <S.FormField>
        <ArrowLeftSvg setCurrentModal={setCurrentModal} />
      </S.FormField>
    </AuthenticationTemplate>
  );
};

export default EmailForm;

function ArrowLeftSvg({
  setCurrentModal,
}: {
  setCurrentModal: Dispatch<string>;
}) {
  return (
    <svg
      onClick={() => setCurrentModal(modals[0])}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-arrow-left-circle"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M16 12H8" />
      <path d="m12 8-4 4 4 4" />
    </svg>
  );
}
