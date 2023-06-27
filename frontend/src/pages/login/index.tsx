import React, { useState } from "react";
import DinamicHeader from "../../components/header";
import {LoginContainer, LoginForm, ErrorText} from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../schemas/login";
import { useUser } from "../../hooks/contexts";
import { Link } from "react-router-dom";
import LoginFooter from "./Footer";

export default function LoginPage(): JSX.Element{

    const { login } = useUser()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { register, trigger, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setEmail(e.target.value);
    }

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setPassword(e.target.value);
    }

    const onLogin = ()=> {
        login({ email, password })
    }

    document.title = "Entrar | DiversiTrampos";
    return (
        <>
            <DinamicHeader startBtn={true} searchBtn={true} registerBtn={true}/>
            <LoginContainer>
                <LoginForm onSubmit={handleSubmit(login)}>
                    <h2>Entrar</h2>
                    <label>Email</label>
                    <input type="email" onChange={onChangeEmail} {...register("email")} placeholder="Insira seu e-mail"/>
                    { /*{errors.email && <ErrorText>{errors.email.message}</ErrorText>}*/ }
                    <label>Senha</label>
                    <input type="password" onChange={onChangePassword} {...register("password")} placeholder="Insira sua senha"/>
                    { /* {errors.password && <ErrorText>{errors.password.message}</ErrorText>} */ }
                        
                        <div style={{margin: '0 auto', marginTop: '1em'}}>
                            <input type="checkbox" value="remember" {...register('remember')} />
                            <label>Lembrar-me</label>
                        </div>
                    <button type="submit">Entrar</button>
                    <LoginFooter/>
                </LoginForm>
            </LoginContainer>
        </>
    )
}