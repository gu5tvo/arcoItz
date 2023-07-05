import React, { useState } from "react";
import DinamicHeader from "../../components/header";
import {LoginContainer, LoginForm, ErrorText} from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../schemas/login";
import { useUser } from "../../hooks/contexts";
import { Link } from "react-router-dom";
import LoginFooter from "./Footer";

interface LoginData {
    email: string,
    password: string,
    remember: boolean
}

export default function LoginPage(): JSX.Element{

    const { login } = useUser()

    const { register, trigger, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });

    const onLogin = handleSubmit(async (formData: LoginData) => {
        await trigger();
        login(formData);
      })

    document.title = "Entrar | DiversiTrampos";
    return (
        <>
            <DinamicHeader startBtn={true} searchBtn={true} registerBtn={true}/>
            <LoginContainer>
                <LoginForm onSubmit={onLogin}>
                    <h2>Entrar</h2>
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
                        <div style={{margin: '0 auto', marginTop: '1em'}}>
                            <input type="checkbox" value="remember" {...register('remember')} />
                            <label>Lembrar-me</label>
                        </div>
                        <button type="submit">Entrar</button>
                    </div>
                    <LoginFooter/>
                </LoginForm>
            </LoginContainer>
        </>
    )
}