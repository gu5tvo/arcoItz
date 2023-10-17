//frontend : DocumentModal.tsx
import React from "react";
import * as S from "../../style";
import AuthenticationTemplate from "..";
import ErrorMessage from "../ErrorMessage";
import { iValidateEmail } from "../../../../interfaces/users";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormTrigger,
} from "react-hook-form";
import EmailForm from "./EmailForm";

export interface EmailConfirmationModalProps {
  sendRequest: (data: iValidateEmail) => void;
  handleSubmit: UseFormHandleSubmit<iValidateEmail, undefined>;
  trigger: UseFormTrigger<iValidateEmail>;
  register: UseFormRegister<iValidateEmail>;
  errors: FieldErrors<iValidateEmail>;
}

export default function EmailConfirmationModal(props: EmailConfirmationModalProps) {
  const onSubmit = props.handleSubmit(async (formData: iValidateEmail) => {});

  return (
    <AuthenticationTemplate handleForm={onSubmit}>
      <EmailForm props={props} onSubmit={onSubmit}/>
    </AuthenticationTemplate>
  );
}

//npm i --save react-code-input