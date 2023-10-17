//frontend : DocumentModal.tsx
import React, { useState } from "react";
import EmailForm from "./EmailForm";
import Instructions from "./Instructions";
import { iValidateEmail } from "../../../../interfaces/users";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  // UseFormTrigger,
} from "react-hook-form";

export interface EmailConfirmationModalProps {
  handleSubmit: UseFormHandleSubmit<iValidateEmail, undefined>;
  // trigger: UseFormTrigger<iValidateEmail>;
  register: UseFormRegister<iValidateEmail>;
  errors: FieldErrors<iValidateEmail>;
}

export const modals = [ 'Instructions' ,'EmailForm']

export default function EmailConfirmationModal(props: EmailConfirmationModalProps) {

  const [ currentModal , setCurrentModal ] = useState(modals[0])

  return (
    <>
      {
        currentModal === modals[0] 
        ? <Instructions setCurrentModal={setCurrentModal} />
        : <EmailForm {...props} setCurrentModal={setCurrentModal}/>
      }
    </>
  );
}

