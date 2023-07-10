import React, { useEffect } from "react";
import DinamicHeader from "../../components/header";
import {RegisterContainer, RegisterForm, ErrorText} from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registerSchema from "../../schemas/register";
import { useUser } from "../../hooks/contexts";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface RegisterData {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}

export default function RegisterPage(): JSX.Element{

    const { register, handleSubmit, trigger, formState: { errors } } = useForm({resolver: yupResolver(registerSchema)});
    const { registerUser, isAuthenticated, profile } = useUser();
    document.title = "Cadastre-se | DiversiTrampos";
    const navigate = useNavigate()

    const onRegister = handleSubmit(async (formData: RegisterData) => {
        await trigger();
        registerUser(formData);
      })

    useEffect(()=> {
        profile({ showError: false })
        if (isAuthenticated) navigate('/dashboard')
    }, [isAuthenticated])

    return (
        <>
            <DinamicHeader startBtn={true} searchBtn={true} loginBtn={true}/>
            <RegisterContainer>
                <RegisterForm onSubmit={onRegister}>
                    <h2>Cadastre-se</h2>

                    <div className='form-section'>
                        <label>Nome Completo</label>
                        <input type="text" {...register("name")} placeholder="Insira seu nome completo"/>
                        {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
                    </div>

                    <div className='form-section'>
                        <label>Email</label>
                        <input type="email" {...register("email")} placeholder="Insira seu e-mail"/>
                        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
                    </div>

                    <div className='form-section'>
                        <label>Senha</label>
                        <input type="password" {...register("password")} placeholder="Insira sua senha"/>
                        {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
                    </div>

                    <div className='form-section'>
                        <label>Confirme sua senha</label>
                        <input type="password" {...register("confirmPassword")} placeholder="Confirme sua senha"/>
                        {errors.confirmPassword && <ErrorText>{errors.confirmPassword.message}</ErrorText>}
                    </div>

                    <div className='form-section'>
                        <button type="submit">Cadastrar</button>
                        <nav>
                            <span>Já possui uma conta? <Link to="/login">Faça login</Link>!</span>
                        </nav>
                    </div>
                </RegisterForm>
            </RegisterContainer>
        </>
    )
}