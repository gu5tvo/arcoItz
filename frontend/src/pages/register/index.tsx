import React from "react";
import DinamicHeader from "../../components/header";
import {RegisterContainer, RegisterForm, ErrorText} from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registerSchema from "../../schemas/register";
import { useUser } from "../../hooks/contexts";
import { Link } from "react-router-dom";

export default function RegisterPage(): JSX.Element{

    const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(registerSchema)});
    const { registerUser } = useUser();
    document.title = "Cadastre-se | DiversiTrampos";
    return (
        <>
            <DinamicHeader startBtn={true} searchBtn={true} loginBtn={true}/>
            <RegisterContainer>
                <RegisterForm onSubmit={handleSubmit(registerUser)}>
                    <h2>Cadastre-se</h2>
                    <label>Nome Completo</label>
                    <input type="text" {...register("name")} placeholder="Insira seu nome completo"/>
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
                        <p>Já possui uma conta? <Link to="/login">Faça login</Link>!</p>
                    </nav>
                </RegisterForm>
            </RegisterContainer>
        </>
    )
}