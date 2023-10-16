import React from "react";

import { EmailConfirmationModal } from "../features";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import emailConfirmSchema from "../schemas/emailConfirm";


export default function EmailConfirmation() {

  const { register, handleSubmit, trigger, formState: { errors } } = useForm({
    resolver: yupResolver(emailConfirmSchema)
  });

  const sendRequest = ( ) => {

  }

  const emailConfirmationData = { sendRequest, handleSubmit, register, trigger, errors }

  return <EmailConfirmationModal {...emailConfirmationData} />;
}
