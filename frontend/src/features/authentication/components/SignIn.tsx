import { FieldErrors, UseFormHandleSubmit, UseFormRegister, UseFormTrigger } from "react-hook-form";
import AuthenticationTemplate from "./";
import { FormField, PageTitle, FieldName, FormSubmit, CheckboxElement, SubmitButton } from "../style";
import FormInput from "./FormInput";
import ErrorMessage from "./ErrorMessage";
import { iAdminLogin } from "../../../interfaces/admin";
import { iLogin } from "../../../interfaces/users";

import React from 'react'

type SignInData = iLogin | iAdminLogin

interface RegisterUserData extends Partial<iLogin> {}
interface RegisterAdminData extends Partial<iAdminLogin> {}
type RegisterData = RegisterUserData | RegisterAdminData

type Register = UseFormRegister<RegisterData>

interface Props {
    signIn: (data: iLogin | iAdminLogin) => void
    handleSubmit: UseFormHandleSubmit<iLogin | iAdminLogin, undefined>
    trigger: UseFormTrigger<iLogin | iAdminLogin>
    register: UseFormRegister<iLogin | iAdminLogin>
    errors: FieldErrors<iLogin | iAdminLogin>
}

export default function SignIn({ signIn, handleSubmit, trigger, register, errors }: Props) {

    const onSignIn = handleSubmit(async (formData: SignInData) => {
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
                    <ErrorMessage field={errors.email}/>
                </FormField>

                <FormField>
                    <FieldName htmlFor="password">Senha</FieldName>
                    <FormInput 
                        type="password" 
                        register={register as Register} 
                        placeholder="Insira sua senha"
                    />
                    <ErrorMessage field={errors.password}/>
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