import { FieldErrors, UseFormHandleSubmit, UseFormRegister, UseFormTrigger } from "react-hook-form";
import { Link } from "react-router-dom";
import { iRegister } from "../../../interfaces/users";
import { iAdminRegister } from "../../../interfaces/admin";
import { BottomInfos, FieldName, FormField, PageTitle, SubmitButton } from "../style";
import AuthenticationTemplate from ".";
import ErrorMessage from "./ErrorMessage";
import FormInput from "./FormInput";

import React from 'react'

type SignUpData = iRegister | iAdminRegister

interface RegisterUserData extends Partial<iRegister> {}
interface RegisterAdminData extends Partial<iAdminRegister> {}
type RegisterData = RegisterUserData | RegisterAdminData

type Register = UseFormRegister<RegisterData>


interface Props {
    signUp: (data: iRegister | iAdminRegister) => void
    handleSubmit: UseFormHandleSubmit<iRegister | iAdminRegister, undefined>
    trigger: UseFormTrigger<iRegister | iAdminRegister>
    register: UseFormRegister<iRegister | iAdminRegister>
    errors: FieldErrors<iRegister | iAdminRegister>
}

export default function SignUp({ signUp, handleSubmit, trigger, register, errors }: Props): JSX.Element{

    const onSignUp = handleSubmit(async (formData: SignUpData) => {
        await trigger();
        signUp(formData);
      })

    return (
        <AuthenticationTemplate handleForm={onSignUp}>
            <PageTitle>Cadastre-se</PageTitle>

            <FormField>
                <FieldName>Nome Completo</FieldName>
                <FormInput type="name" register={register as Register} placeholder="Insira seu nome completo"/>
                <ErrorMessage message={errors?.name?.message}/>
            </FormField>

            <FormField>
                <FieldName htmlFor="email">Email</FieldName>
                <FormInput type="email" register={register as Register} placeholder="Insira seu e-mail"/>
                <ErrorMessage message={errors?.email?.message}/>
            </FormField>

            <FormField>
                <FieldName htmlFor="password">Senha</FieldName>
                <FormInput type="password" register={register as Register} placeholder="Insira sua senha"/>
                <ErrorMessage message={errors?.password?.message}/>
            </FormField>

            <FormField>
                <FieldName htmlFor="confirmPassword">Confirme sua senha</FieldName>
                <FormInput type="password" id={"confirmPassword"} placeholder="Confirme sua senha" register={register as Register}/>
                <ErrorMessage message={errors?.confirmPassword?.message}/>
            </FormField>

            <FormField>
                <SubmitButton type='submit'>Cadastrar</SubmitButton>
                
                <BottomInfos>
                    Já possui uma conta? <Link to="/login">Faça login</Link>!
                </BottomInfos>
            </FormField>
        </AuthenticationTemplate>
    )
}