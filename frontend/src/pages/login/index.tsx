import React from "react";
import DinamicHeader from "../../components/header";
import {LoginContainer, LoginForm, ErrorText} from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../schemas/login";
import { useUser } from "../../hooks/contexts";
import { Link } from "react-router-dom";

export default function LoginPage(): JSX.Element{

    const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(loginSchema)});
    const { login } = useUser();
    document.title = "Entrar | DiversiTrampos";
    return (
        <>
            <DinamicHeader startBtn={true} searchBtn={true} registerBtn={true}/>
            <LoginContainer>
                <LoginForm onSubmit={handleSubmit(login)}>
                    <h2>Entrar</h2>
                    <label>Email</label>
                    <input type="email" {...register("email")} placeholder="Insira seu e-mail"/>
                    {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
                    <label>Senha</label>
                    <input type="password" {...register("password")} placeholder="Insira sua senha"/>
                    {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
                        
                        <div style={{margin: '0 auto', marginTop: '1em'}}>
                            <input type="checkbox" value="remember" {...register('remember')} />
                            <label>Lembrar-me</label>
                        </div>
                    <button type="submit">Entrar</button>
                    <nav>
                        <p>Esqueceu sua senha? Clique aqui</p>
                        <p>Não possui uma conta? <Link to="/register">Cadastre-se</Link>!</p>
                    </nav>
                </LoginForm>
            </LoginContainer>
        </>
    )
}