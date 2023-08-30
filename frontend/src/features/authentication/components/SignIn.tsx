import { FieldErrors, UseFormHandleSubmit, UseFormRegister, UseFormTrigger } from "react-hook-form";
import AuthenticationTemplate from "./";
import { FormField, PageTitle, FieldName, FormSubmit, CheckboxElement, SubmitButton } from "../style";
import FormInput from "./FormInput";
import ErrorMessage from "./ErrorMessage";
import { iAdminLogin } from "../../../interfaces/admin";
import { iLogin } from "../../../interfaces/users";

import React from 'react'
import loginSchema from "../../../schemas/login";
import registerSchema from "../../../schemas/register";
import { InferType } from "yup";

type SignInData = iLogin | iAdminLogin

type FormType = InferType<typeof loginSchema | typeof registerSchema>
type Register = UseFormRegister<FormType>

export interface SignProps {
    signIn: (data: SignInData) => void
    handleSubmit: UseFormHandleSubmit<SignInData, undefined>
    trigger: UseFormTrigger<iLogin> | UseFormTrigger<iAdminLogin>
    register: UseFormRegister<iLogin | iAdminLogin>
    errors: FieldErrors<SignInData>
}

export default function SignIn({ signIn, handleSubmit, trigger, register, errors }: SignProps) {

    const onSignIn = handleSubmit(async (formData: SignInData) => {
        console.log(formData)
        await trigger();
        signIn(formData);
      })


    return (
            <AuthenticationTemplate handleForm={onSignIn}>
                <PageTitle>Entrar</PageTitle>

                <FormField>
                    <FieldName htmlFor="email">Email</FieldName>
                    <FormInput 
                        type="email" 
                        register={register as Register} 
                        placeholder="Insira seu e-mail"
                    />
                    <ErrorMessage message={errors.email?.message}/>
                </FormField>

                <FormField>
                    <FieldName htmlFor="password">Senha</FieldName>
                    <FormInput 
                        type="password" 
                        register={register as Register} 
                        placeholder="Insira sua senha"
                    />
                    <ErrorMessage message={errors.password?.message}/>
                </FormField> 

                <FormField>
                    <FormSubmit>
                        <CheckboxElement {...register('remember')} />
                        <FieldName>Lembrar-me</FieldName>
                    </FormSubmit>

                    <SubmitButton>Entrar</SubmitButton>
                </FormField>
                
            </AuthenticationTemplate>
    )
}