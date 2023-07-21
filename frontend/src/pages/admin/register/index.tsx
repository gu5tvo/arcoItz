import React, { useState } from "react";
import DinamicHeader from "../../../components/header";
import {RegisterContainer, RegisterForm, ErrorText} from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registerSchema from "../../../schemas/register";
import { useAdmin } from "../../../hooks/contexts";
import { Link, Navigate } from "react-router-dom";

interface RegisterData {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}

export default function AdminRegisterPage(): JSX.Element{

    const { register, handleSubmit, trigger, formState: { errors } } = useForm({resolver: yupResolver(registerSchema)});
    const { adminRegister } = useAdmin();
    const [registered, setRegistered] = useState(false)

    document.title = "Cadastre-se | DiversiTrampos";

    const onRegister = handleSubmit(async (formData: RegisterData) => {
        await trigger();
        adminRegister(formData);
        setRegistered(true)
      })

    if (registered) return <Navigate to='/admin/login'/>

    return (
        <>
            <DinamicHeader adminLogoutBtn adminPanel/>
            <RegisterContainer>
                <RegisterForm onSubmit={onRegister}>
                    <h2>Cadastre-se</h2>
                    <label>Nome Completo</label>
                    <input type="text" {...register("name")} placeholder="Insira seu nome completo"/>
                    {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
                    <label>Email</label>
                    <input type="email" {...register("email")} placeholder="Insira seu e-mail"/>
                    {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
                    <label>Senha</label>
                    <input type="password" {...register("password")} placeholder="Insira sua senha"/>
                    {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
                    <label>Confirme sua senha</label>
                    <input type="password" {...register("confirmPassword")} placeholder="Confirme sua senha"/>
                    {errors.confirmPassword && <ErrorText>{errors.confirmPassword.message}</ErrorText>}
                    <button type="submit">Cadastrar</button>
                    <nav>
                        <p>Já possui uma conta? <Link to="/admin/login">Faça login</Link>!</p>
                    </nav>
                </RegisterForm>
            </RegisterContainer>
        </>
    )
}